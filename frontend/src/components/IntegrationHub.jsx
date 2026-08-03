import React, { useState, useRef } from 'react';

export default function IntegrationHub() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  // 파이프라인 상태
  const [targetTool, setTargetTool] = useState('canva');
  const [contentFormat, setContentFormat] = useState('cardnews');
  const [directorPrompt, setDirectorPrompt] = useState('');
  
  // 🌟 핵심: n8n에서 실제 되돌려준 결과 데이터를 저장할 상태
  const [executionResult, setExecutionResult] = useState(null);

  const fileInputRef = useRef(null);

  const savedPrompts = [
    { id: 1, label: '🌊 여름 바다 슈링클스', text: '이번 슈링클스 키링은 여름 바다 컨셉입니다. 청량한 톤으로 캡션을 뽑고, 카드뉴스 첫 장에 "여름 한정 수량"을 강조해주세요.' },
    { id: 2, label: '🪴 발포세라믹 클래스', text: '발포세라믹 화분 원데이 클래스 모집글입니다. 초보자도 깔끔하게 만들 수 있다는 점을 강조해주세요.' }
  ];

  const handlePromptSelect = (text) => {
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
    setExecutionResult(null); // 이전 결과 초기화

    try {
      const base64Data = await convertToBase64(file);

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

      // 🌟 실제 n8n 웹훅 호출 (URL 입력 필요)
      // const response = await fetch('http://localhost:5678/webhook/blossom-formill-in', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload),
      // });
      // const result = await response.json();

      // [테스트 시뮬레이션용 가상 응답 데이터]
      await new Promise(resolve => setTimeout(resolve, 3000));
      const mockResult = {
        status: "success",
        executionId: "EXEC-" + Math.floor(1000 + Math.random() * 9000),
        generatedCaption: `[${targetTool.toUpperCase()} 연동 성공]\n✨ ${directorPrompt || '기본 지침 반영'}\n\n손끝에서 피어나는 나만의 공예품, Blossom Topper에서 만나보세요! 🌿\n#공방 #원데이클래스 #수제공예`,
        designUrl: targetTool === 'canva' ? "https://canva.com/design/MOCK_ID" : "https://figma.com/file/MOCK_ID",
        notionSaved: true
      };

      setExecutionResult(mockResult);
      setUploadSuccess(true);
      
    } catch (error) {
      console.error("업로드 에러 발생:", error);
      alert("n8n 서버 전송 실패! Webhook URL 또는 네트워크 상태를 확인하세요.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      <div>
        <h2 className="text-2xl font-black text-neutral-900 tracking-tight">연동 허브</h2>
        <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">
          미디어와 디렉터 프롬프트를 전송하면 n8n의 구글 AI 스튜디오 및 디자인 API가 실시간 작동합니다.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-2xl border border-white/90 p-5 sm:p-7 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        
        {/* 스위치 & 프롬프트 설정 */}
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

        {/* 프롬프트 입력 영역 */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-neutral-700 mb-2">세부 지시사항 (Director Prompt)</label>
          <div className="flex gap-2 overflow-x-auto pb-3 mb-1">
            {savedPrompts.map(prompt => (
              <button key={prompt.id} onClick={() => handlePromptSelect(prompt.text)} className="shrink-0 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded-full text-[11px] font-bold hover:bg-emerald-100 transition-all">
                {prompt.label}
              </button>
            ))}
          </div>
          <textarea
            value={directorPrompt}
            onChange={(e) => setDirectorPrompt(e.target.value)}
            placeholder="지시사항을 입력하세요..."
            className="w-full h-24 p-4 bg-white/50 border border-neutral-200/60 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 resize-none"
          />
        </div>

        {/* 업로드 버튼 */}
        <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*,video/*" />
        <div 
          onClick={() => !isUploading && fileInputRef.current.click()}
          className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
            isUploading ? 'border-emerald-400 bg-emerald-50/50 cursor-wait' : 'border-neutral-200 hover:border-emerald-400 hover:bg-emerald-50/30 cursor-pointer'
          }`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center justify-center animate-pulse py-4">
              <div className="w-10 h-10 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin mb-3"></div>
              <p className="text-sm font-bold text-emerald-800">n8n 파이프라인 가동 및 Google AI 분석 중...</p>
            </div>
          ) : (
            <div className="py-2">
              <p className="text-sm font-bold text-neutral-800">📸 이미지/영상 파일 선택하여 n8n 파이프라인 전송</p>
            </div>
          )}
        </div>

        {/* 🌟 2. 실제 전송 및 생성 결과 모니터링 카드 (눈으로 확인하는 영역) */}
        {executionResult && (
          <div className="mt-6 p-5 bg-emerald-950 text-emerald-50 rounded-2xl border border-emerald-800 shadow-xl animate-fade-in font-mono text-xs">
            <div className="flex justify-between items-center border-b border-emerald-800/80 pb-3 mb-3">
              <span className="font-bold text-emerald-400 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                n8n 실행 완료 (ID: {executionResult.executionId})
              </span>
              <span className="bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded text-[10px]">
                Notion DB 동기화됨
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-emerald-500 block mb-1 font-sans font-bold">[생성된 인스타 캡션/대본]</span>
                <p className="bg-emerald-900/50 p-3 rounded-xl whitespace-pre-wrap font-sans text-neutral-200 leading-relaxed text-xs border border-emerald-800/50">
                  {executionResult.generatedCaption}
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-emerald-500 font-sans font-bold">[타겟 디자인 레이아웃]</span>
                <a 
                  href={executionResult.designUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-sans font-bold px-3 py-1.5 rounded-lg transition-all"
                >
                  {targetTool.toUpperCase()} 바로가기 ↗
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}