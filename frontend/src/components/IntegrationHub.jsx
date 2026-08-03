import React, { useState, useRef } from 'react';

export default function IntegrationHub() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  // 파이프라인 분기 상태
  const [targetTool, setTargetTool] = useState('canva');
  const [contentFormat, setContentFormat] = useState('cardnews');
  
  // 세부 지시사항 (Director's Prompt)
  const [directorPrompt, setDirectorPrompt] = useState('');
  
  const fileInputRef = useRef(null);

  // 🌟 앱 내 저장된 프롬프트 불러오기 (프리셋 데이터)
  const savedPrompts = [
    { 
      id: 1, 
      label: '🌊 여름 바다 슈링클스', 
      text: '이번 슈링클스 키링은 여름 바다 컨셉입니다. 청량하고 시원한 톤으로 인스타 캡션을 뽑아주고, 카드뉴스 첫 장 텍스트에는 "여름 한정 수량"을 굵게 강조해주세요.' 
    },
    { 
      id: 2, 
      label: '🪴 발포세라믹 클래스', 
      text: '발포세라믹 화분 원데이 클래스 모집글입니다. 초보자도 흙먼지 없이 깔끔하게 만들 수 있다는 점을 강조하고, 마지막 장에 프로필 링크 예약 유도 문구를 넣어주세요.' 
    },
    { 
      id: 3, 
      label: '✨ 제스모나이트 감성', 
      text: '제스모나이트 마블링 트레이 신제품 소개입니다. 고급스럽고 차분한 감성 에세이 톤으로 작성해주고, 해시태그는 인테리어 소품 위주로 15개 추천해주세요.' 
    },
    {
      id: 4,
      label: '🎨 페이퍼 아트 주문제작',
      text: '페이퍼 아트 토퍼 맞춤 주문제작 완료 건입니다. 고객의 특별한 기념일을 축하하는 따뜻한 메시지를 담아주고, 릴스 대본용으로 15초 분량의 텍스트도 함께 추출해주세요.'
    }
  ];

  const handlePromptSelect = (text) => {
    // 기존 텍스트가 있으면 덧붙이고, 없으면 새로 덮어쓰기
    setDirectorPrompt(prev => prev ? `${prev}\n\n${text}` : text);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setUploadSuccess(false);

    try {
      const base64Data = await convertToBase64(file);

      // n8n으로 보낼 최종 페이로드
      const payload = {
        fileName: file.name,
        mimeType: file.type,
        fileData: base64Data.split(',')[1],
        metadata: {
          designTool: targetTool,
          format: contentFormat,
          directorPrompt: directorPrompt,
          source: "Blossom Topper Control Center",
          timestamp: new Date().toISOString()
        }
      };

      console.log("n8n 전송 데이터 프리뷰:", payload.metadata);

      // 실제 n8n Webhook URL
      // await fetch('YOUR_N8N_WEBHOOK_URL', { ... });
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      setUploadSuccess(true);
      
    } catch (error) {
      console.error("업로드 에러 발생:", error);
    } finally {
      setTimeout(() => {
        setIsUploading(false);
        setUploadSuccess(false);
        setDirectorPrompt(''); // 전송 후 초기화
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 3000);
    }
  };

  const integrations = [
    { name: 'n8n Webhook', status: 'CONNECTED', latency: '42ms', lastSync: '방금 전', desc: 'JSON 페이로드 수신 및 라우팅' },
    { name: 'Google AI Studio', status: 'ACTIVE', latency: '210ms', lastSync: '방금 전', desc: '디렉터 지시사항 반영 및 텍스트 생성' },
    { name: 'Canva API', status: targetTool === 'canva' ? 'ACTIVE' : 'STANDBY', latency: '85ms', lastSync: '방금 전', desc: '템플릿 기반 자동 병합' },
    { name: 'Figma API', status: targetTool === 'figma' ? 'ACTIVE' : 'STANDBY', latency: '-', lastSync: '어제', desc: '고급 컴포넌트 자동화' }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      
      <div>
        <h2 className="text-2xl font-black text-neutral-900 tracking-tight">연동 허브</h2>
        <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">
          미디어 업로드 시 설정한 타겟 툴과 세부 지시사항이 n8n 파이프라인으로 전달되어, <br className="hidden sm:block" />
          AI가 대표님의 디렉팅에 맞춘 최적화된 콘텐츠를 자동 생성합니다.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-2xl border border-white/90 p-5 sm:p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        
        {/* 파이프라인 설정 폼 (스위치 UI) */}
        <div className="mb-5 p-4 bg-neutral-50/80 rounded-2xl border border-neutral-200/60 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-bold text-neutral-700 whitespace-nowrap">타겟 툴:</span>
            <div className="flex bg-neutral-200/50 p-1 rounded-xl w-full sm:w-auto">
              <button onClick={() => setTargetTool('canva')} className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${targetTool === 'canva' ? 'bg-white text-blue-600 shadow-sm' : 'text-neutral-500'}`}>Canva</button>
              <button onClick={() => setTargetTool('figma')} className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${targetTool === 'figma' ? 'bg-white text-purple-600 shadow-sm' : 'text-neutral-500'}`}>Figma</button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-bold text-neutral-700 whitespace-nowrap">포맷:</span>
            <div className="flex bg-neutral-200/50 p-1 rounded-xl w-full sm:w-auto">
              <button onClick={() => setContentFormat('cardnews')} className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${contentFormat === 'cardnews' ? 'bg-white text-emerald-600 shadow-sm' : 'text-neutral-500'}`}>카드뉴스</button>
              <button onClick={() => setContentFormat('reels')} className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${contentFormat === 'reels' ? 'bg-white text-rose-500 shadow-sm' : 'text-neutral-500'}`}>숏폼/릴스</button>
            </div>
          </div>
        </div>

        {/* 🌟 프롬프트 퀵 선택 및 세부 지시사항 입력 영역 */}
        <div className="mb-6">
          <div className="flex items-end justify-between mb-2 px-1">
            <label className="block text-xs font-bold text-neutral-700">
              세부 지시사항 (Google AI Studio 전달용)
            </label>
          </div>
          
          {/* 빠른 프롬프트 칩스 (가로 스크롤) */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-1 scrollbar-hide">
            {savedPrompts.map(prompt => (
              <button
                key={prompt.id}
                onClick={() => handlePromptSelect(prompt.text)}
                className="shrink-0 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded-full text-[11px] font-bold hover:bg-emerald-100 hover:shadow-sm transition-all active:scale-95"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          <textarea
            value={directorPrompt}
            onChange={(e) => setDirectorPrompt(e.target.value)}
            placeholder="상단의 태그를 클릭하여 저장된 프롬프트를 불러오거나, 직접 지시사항을 입력하세요."
            className="w-full h-28 p-4 bg-white/50 border border-neutral-200/60 rounded-2xl text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all resize-none shadow-inner"
          />
        </div>

        {/* 파일 업로드 드롭존 */}
        <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*,video/*" />
        <div 
          onClick={() => !isUploading && fileInputRef.current.click()}
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
            isUploading ? 'border-emerald-400 bg-emerald-50/50 cursor-wait' : uploadSuccess ? 'border-emerald-500 bg-emerald-100/50 cursor-default' : 'border-neutral-200 hover:border-emerald-400 hover:bg-emerald-50/30 cursor-pointer'
          }`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center justify-center animate-pulse">
              <div className="w-12 h-12 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin mb-4"></div>
              <p className="text-sm font-bold text-emerald-800">지시사항 인코딩 및 n8n 전송 중...</p>
            </div>
          ) : uploadSuccess ? (
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg shadow-emerald-500/30">✓</div>
              <p className="text-sm font-bold text-emerald-900">파이프라인 호출 완료!</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <p className="text-sm font-bold text-neutral-800">클릭하여 미디어를 업로드하고 파이프라인을 가동하세요</p>
            </div>
          )}
        </div>
      </div>

      {/* 상태 모니터링 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {integrations.map((item, index) => (
          <div key={index} className="bg-white/85 backdrop-blur-xl border border-white/90 p-5 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-bold text-neutral-900 text-[15px]">{item.name}</h3>
                <p className="text-[11px] text-neutral-500 mt-1">{item.desc}</p>
              </div>
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-md tracking-wide ${
                item.status === 'CONNECTED' || item.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700' : 'bg-neutral-100 text-neutral-500'
              }`}>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}