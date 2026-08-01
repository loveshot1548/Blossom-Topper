import React, { useState, useEffect } from 'react';

export default function AiMarketing() {
  const trendingTags = ['#JesmoniteArt', '#EcoCraft', '#발포세라믹', '#맞춤토퍼'];

  const [prompts, setPrompts] = useState(() => {
    const savedPrompts = localStorage.getItem('blossom_prompts');
    if (savedPrompts) {
      return JSON.parse(savedPrompts);
    }
    return [
      { id: 1, category: '블로그 기획', title: '월간 포스팅 캘린더 기획', content: '내 블로그 주제는 맞춤 토퍼 및 제스모나이트 소품 제작입니다. 이번 달에 쓸 수 있는 포스팅 아이디어 12편을 주제·제목·예상 키워드·독자 TPO 포함해서 표로 만들어 주세요.' },
      { id: 2, category: '블로그 기획', title: '고객 TPO 분석 및 타겟팅', content: '[발포세라믹 원데이클래스]를 검색할 독자의 TPO(누가/언제/상황/목적)를 3가지 페르소나로 분석하고, 각 페르소나에게 필요한 정보 TOP 3을 알려주세요.' },
      { id: 3, category: '본문 작성', title: '시선을 끄는 클릭 유도 제목 10선', content: '주제 [여름 인테리어 기획전], 키워드 [제스모나이트 트레이] 포함, 30자 이내 블로그 제목 10개 만들어 주세요. 숫자·후기·비교 등 다양한 형식을 사용해 주세요.' },
      { id: 4, category: '본문 작성', title: '3가지 버전의 훅(도입부)', content: '[페이퍼 아트 토퍼 주문 제작] 블로그 글의 도입부를 ① 독자 고민 공감형 ② 실패 경험 공유형 ③ 결과 먼저 보여주는 형으로 각 5줄씩 써 주세요.' },
      { id: 5, category: '본문 작성', title: '신뢰도를 높이는 대안 비교', content: '[기념일 케이크 데코]에서 고려할 수 있는 대안 3가지(일반 초, 슈링클스, 맞춤 토퍼)의 장단점과 선택 기준 표, 독자 상황별 추천을 작성해 주세요.' },
      { id: 6, category: '본문 작성', title: '경험 기반 포스팅 초안', content: '제목 [슈링클스 키링 원데이 클래스 후기], 키워드 [김포 공방 데이트], 1200자, 직접 경험·시행착오·결과 수치 포함, 친근한 말투로 블로그 초안 써 주세요.' },
      { id: 7, category: '마케팅 & SEO', title: '메인 및 롱테일 키워드 추출', content: '[제스모나이트 화분]의 롱테일 키워드 20개를 뽑아 주세요. 월 검색량 500~5000 수준으로 맞춰주세요.' },
      { id: 8, category: '마케팅 & SEO', title: '검색 노출용 태그 추천', content: '[발포세라믹 오브제 제작]과 [친환경 클래스]에 맞는 네이버 블로그 태그 15개 추천해 주세요. 검색량 높은 순서로 정렬해 주세요.' },
      { id: 9, category: '본문 작성', title: '전환율을 높이는 결과/후기', content: '실제 결과 [클래스 문의 3주 만에 5건 → 23건], 예상과 달랐던 점 [초보자도 1시간 만에 완성 가능], 시행착오 [온도 조절 실패 경험]을 바탕으로 블로그 \'결과 및 후기\' 섹션을 솔직하게 작성해 주세요.' },
      { id: 10, category: '비즈니스 제안', title: 'B2B 기업 출강 제안서', content: '브랜드(또는 기업)에 보낼 기업 출강 제안 메일을 써 주세요. 내 블로그: [블라썸 토퍼 공방 운영, 누적 수강생 데이터], 제안 대상: [지역 복지관 및 기업 HR 담당자], 제안 내용: [연말 힐링 발포세라믹 클래스 출강].' },
      { id: 11, category: '마케팅 & SEO', title: '콘텐츠 품질 자가 진단', content: '다음 블로그 글을 네이버 가이드라인 5가지 기준(TPO·경험·비교·결과·이미지)으로 각각 점수(10점 만점)와 개선점을 알려주세요: [여기에 작성한 글 붙여넣기].' }
    ];
  });

  const [newPrompt, setNewPrompt] = useState({ category: '블로그 기획', title: '', content: '' });

  useEffect(() => {
    localStorage.setItem('blossom_prompts', JSON.stringify(prompts));
  }, [prompts]);

  const handleAddPrompt = (e) => {
    e.preventDefault();
    if (!newPrompt.title || !newPrompt.content) return;
    setPrompts([{ ...newPrompt, id: Date.now() }, ...prompts]);
    setNewPrompt({ category: '블로그 기획', title: '', content: '' }); 
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('프롬프트가 클립보드에 복사되었습니다!');
  };

  return (
    <div className="animate-fade-in space-y-6 px-2 sm:px-0">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">AI 마케팅 & 프롬프트 사전</h1>
        <p className="text-sm sm:text-base text-gray-700 mt-2">1인 공방에 최적화된 프롬프트를 활용하여 고품질 콘텐츠를 빠르게 생산하세요.</p>
      </div>

      <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 shadow-sm border border-white/90 mb-6">
        <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-900">📈 이번 주 급상승 해시태그</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {trendingTags.map((tag, idx) => (
            <span key={idx} className="bg-green-800/10 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-gray-600 bg-white/50 p-3 rounded-xl border border-gray-100">
          💡 AI 분석 요약: 인테리어 소품 중심의 비주얼 키워드와 업사이클링 관련 검색량이 블로그를 중심으로 210% 증가했습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white/70 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 shadow-sm border border-white/90 h-fit">
          <h3 className="text-base sm:text-lg font-bold mb-4 text-gray-900">새 프롬프트 추가</h3>
          <form onSubmit={handleAddPrompt} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">카테고리</label>
              <select 
                value={newPrompt.category} 
                onChange={(e) => setNewPrompt({...newPrompt, category: e.target.value})}
                className="w-full p-2.5 sm:p-2 text-sm rounded-xl border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-800"
              >
                <option>블로그 기획</option>
                <option>본문 작성</option>
                <option>마케팅 & SEO</option>
                <option>비즈니스 제안</option>
                <option>SNS 캡션</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">제목 (용도)</label>
              <input 
                type="text" 
                placeholder="예: 맞춤 토퍼 인스타 해시태그 생성"
                value={newPrompt.title}
                onChange={(e) => setNewPrompt({...newPrompt, title: e.target.value})}
                className="w-full p-2.5 sm:p-2 text-sm rounded-xl border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">프롬프트 내용</label>
              <textarea 
                rows="4"
                placeholder="AI에게 지시할 명령어를 입력하세요..."
                value={newPrompt.content}
                onChange={(e) => setNewPrompt({...newPrompt, content: e.target.value})}
                className="w-full p-2.5 sm:p-2 text-sm rounded-xl border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-800 resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-green-800 text-white font-bold py-3 sm:py-2.5 rounded-xl hover:bg-green-900 transition-colors shadow-sm">
              저장하기
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-1 sm:pr-2">
          {prompts.map((prompt) => (
            <div key={prompt.id} className="bg-white/70 backdrop-blur-2xl rounded-3xl p-4 sm:p-5 shadow-sm border border-white/90 transition-all hover:bg-white/90">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                <div>
                  <span className="text-[10px] font-bold text-green-800 bg-green-100 px-2 py-1 rounded-md">{prompt.category}</span>
                  <h4 className="text-sm sm:text-md font-bold text-gray-900 mt-1.5 sm:mt-2">{prompt.title}</h4>
                </div>
                <button 
                  onClick={() => copyToClipboard(prompt.content)}
                  className="text-xs font-bold bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition-colors shrink-0 self-end sm:self-auto"
                >
                  복사
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 p-3 bg-white/50 rounded-xl border border-gray-100 whitespace-pre-wrap break-words">
                {prompt.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}