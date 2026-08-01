import React, { useState } from 'react';

export default function ContentStudio() {
  const [selectedCraft, setSelectedCraft] = useState('제스모나이트 트레이');
  const [contentType, setContentType] = useState('인스타그램 피드');
  const [tone, setTone] = useState('감성적이고 따뜻한');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setCopySuccess(false);

    setTimeout(() => {
      let sampleText = '';
      if (contentType === '인스타그램 피드') {
        sampleText = `✨ [Blossom Topper Studio Daily]\n\n오늘 정성스럽게 완성된 오직 하나뿐인 ${selectedCraft}입니다 🌿\n\n공방 창가로 들어오는 따스한 햇살 아래서 결을 다듬고 있으면, 시간 가는 줄 모르게 온전히 몰입하게 돼요.\n\n나만의 감성을 담은 특별한 소품이나 소중한 분을 위한 선물이 필요하시다면 언제든 편하게 문의주세요! 🤎\n\n- Handmade with Love, Blossom Topper\n\n#블로섬토퍼 #${selectedCraft.replace(/\s+/g, '')} #공방일상 #핸드메이드소품 #데스크테리어 #감성공방`;
      } else if (contentType === '블로그 포스팅') {
        sampleText = `[${selectedCraft} 제작 일지] 손끝으로 완성하는 나만의 감성 인테리어 소품\n\n안녕하세요! 블로섬 토퍼 공방입니다. 😊\n오늘은 최근 많은 사랑을 받고 있는 ${selectedCraft}의 제작 과정과 공방 이야기를 전해드려요.\n\n1. 디자인 구상 및 재료 준비\n정교한 완성도를 위해 세심한 비율로 조율하고, 안전하고 친환경적인 공정을 거칩니다.\n\n2. 디테일 다듬기\n손길이 닿을수록 부드러운 질감이 살아나는 매력이 있죠.\n\n3. 최종 완성 및 패키징\n받아보셨을 때 기분 좋은 미소가 지어지실 수 있도록 정성껏 포장하여 보내드립니다.\n\n클래스 문의나 주문 제작은 블로그 상단 안부게시판이나 네이버 톡톡으로 편하게 연락 주세요!`;
      } else {
        sampleText = `[원데이클래스 모집 안내] ${selectedCraft} 클래스 오픈 🤍\n\n초보자분들도 손쉽게 세상에 하나뿐인 작품을 완성하실 수 있도록 1:1 밀착 코칭으로 진행됩니다.\n\n- 품목: ${selectedCraft}\n- 소요 시간: 약 2시간 내외\n- 포함 사항: 전용 재료비, 포장 패키지, 공방 포토존 촬영\n\n일상에 특별한 힐링을 선물해 보세요. 신청은 프로필 링크를 확인해 주세요! ✨`;
      }

      setGeneratedContent(sampleText);
      setIsGenerating(false);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="animate-fade-in space-y-6 max-w-5xl mx-auto px-2 sm:px-0">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">콘텐츠 스튜디오</h1>
        <p className="text-sm sm:text-base text-gray-700 mt-2">AI로 초안을 생성하고, 최종 검수 및 수정 후 수동으로 발행하세요.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-green-800/20 shadow-sm space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 border-b pb-3">⚙️ 콘텐츠 조건 설정</h2>

          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1.5">대상 공예품</label>
            <select 
              value={selectedCraft} 
              onChange={(e) => setSelectedCraft(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-green-800 focus:outline-none"
            >
              <option value="제스모나이트 트레이">제스모나이트 트레이</option>
              <option value="페이퍼 아트 토퍼">페이퍼 아트 토퍼</option>
              <option value="슈링클스 키링">슈링클스 키링</option>
              <option value="발포세라믹 화분">발포세라믹 화분</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1.5">채널 및 포맷</label>
            <select 
              value={contentType} 
              onChange={(e) => setContentType(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-green-800 focus:outline-none"
            >
              <option value="인스타그램 피드">인스타그램 피드</option>
              <option value="블로그 포스팅">블로그 포스팅</option>
              <option value="원데이클래스 홍보문구">원데이클래스 홍보문구</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1.5">톤앤매너</label>
            <select 
              value={tone} 
              onChange={(e) => setTone(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-green-800 focus:outline-none"
            >
              <option value="감성적이고 따뜻한">감성적이고 따뜻한</option>
              <option value="전문적이고 깔끔한">전문적이고 깔끔한</option>
              <option value="친근하고 발랄한">친근하고 발랄한</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 mt-4"
          >
            {isGenerating ? 'AI 초안 작성 중...' : '✨ AI 콘텐츠 초안 생성하기'}
          </button>
        </div>

        <div className="lg:col-span-2 bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-green-800/20 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">📝 결과값 검수 및 직접 수정</h2>
              <span className="text-xs bg-green-100 text-green-800 font-bold px-2.5 py-1 rounded-lg">수동 최종 발행 모드</span>
            </div>
            <p className="text-xs text-gray-700 mb-3">아래 텍스트는 자유롭게 수정이 가능합니다. 마음에 드는 형태로 다듬은 뒤 복사해서 사용하세요.</p>
            
            <textarea
              className="w-full h-64 sm:h-72 bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm text-gray-900 leading-relaxed focus:ring-2 focus:ring-green-800 focus:outline-none resize-none"
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              placeholder="좌측에서 조건을 선택하고 [AI 콘텐츠 초안 생성하기] 버튼을 누르면 여기에 결과가 출력됩니다..."
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-700">
              {copySuccess ? '클립보드에 복사되었습니다! 🎉' : '발행할 준비가 되었다면 복사 버튼을 누르세요.'}
            </span>
            <button
              onClick={handleCopy}
              disabled={!generatedContent}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all ${
                generatedContent ? 'bg-gray-900 text-white hover:bg-black' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              📋 텍스트 복사하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}