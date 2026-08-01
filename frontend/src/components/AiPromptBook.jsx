import React, { useState } from 'react';

export default function AiPromptBook() {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const prompts = [
    { id: 1, category: 'strategy', title: '01. 주제 선정 (니치 분석)', text: '나는 [공방 종류, 또는 상품/강의]를 운영하는 [나이대]입니다. 네이버 블로그 주제 10가지를 추천하고 각각 대표 키워드 3개씩 알려주세요.' },
    { id: 2, category: 'strategy', title: '02. 블로그 소개글 작성', text: '[공방 종류] 공방 블로그의 프로필 소개글을 3가지 버전으로 써 주세요. 각 100자 이내, 친근하고 신뢰감 있게.' },
    { id: 3, category: 'content', title: '03. 월별 콘텐츠 캘린더', text: '[주제] 블로그의 이번 달 포스팅 계획 12편을 주제·제목·예상 키워드·독자 TPO 포함해서 표로 만들어 주세요.' },
    { id: 4, category: 'content', title: '04. 클릭을 부르는 제목 10선', text: '주제 [주제], 키워드 [키워드] 포함, 30자 이내 블로그 제목 10개 만들어 주세요.' },
    { id: 5, category: 'content', title: '05. 독자 TPO 페르소나 분석', text: '[키워드]를 검색할 독자의 TPO(누가/언제/상황/목적)를 3가지 페르소나로 분석하고, 각 페르소나에게 필요한 정보 TOP 3을 알려주세요.' },
    { id: 6, category: 'content', title: '06. 훅(Hook) 도입부 작성', text: '[주제] 블로그 글의 도입부를 ① 독자 고민 공감형 ② 실패 경험 공유형 ③ 결과 먼저 보여주는 형으로 각 5줄씩 써 주세요.' },
    { id: 7, category: 'content', title: '07. 소제목 및 경험 구성', text: '[제목]의 블로그 글 소제목 5개와 각 소제목 아래 들어갈 핵심 내용 2줄씩 써 주세요. 직접 경험한 팁도 포함해 주세요.' },
    { id: 8, category: 'content', title: '08. 본문 초안 작성 (경험 중심)', text: '[제목], 키워드 [키워드], 1200자, 직접 경험·시행착오·결과 수치 포함, 친근한 말투로 블로그 초안 써 주세요.' },
    { id: 9, category: 'seo', title: '09. 대안 비교 섹션 작성', text: '[주제]에서 고려할 수 있는 대안 3가지의 장단점과 선택 기준 표, 독자 상황별 추천을 작성해 주세요.' },
    { id: 10, category: 'seo', title: '10. 결과 및 후기 섹션 작성', text: '실제 결과 [수치/변화], 예상과 달랐던 점 [내용], 시행착오 [내용]을 바탕으로 블로그 \'결과 및 후기\' 섹션을 솔직하게 작성해 주세요.' },
    { id: 11, category: 'seo', title: '11. 이미지 배치 계획', text: '[글 제목 및 구성]에 넣을 이미지 배치 계획을 섹션별로 알려주세요. 이미지 유형과 촬영·제작 방법도 포함해 주세요.' },
    { id: 12, category: 'seo', title: '12. 본문 교정 및 다듬기', text: '다음 글을 맞춤법 수정, 어색한 표현 개선, 직접 경험한 느낌 유지, 내용 변경 없이 교정해 주세요: [글 붙여넣기]' },
    { id: 13, category: 'seo', title: '13. 태그 추천 (검색순)', text: '[주제]와 [키워드]에 맞는 네이버 블로그 태그 15개 추천해 주세요. 검색량 높은 순서로.' },
    { id: 14, category: 'seo', title: '14. 롱테일 키워드 발굴', text: '[메인 키워드]의 롱테일 키워드 20개를 뽑아 주세요. 월 검색량 500~5000 수준으로.' },
    { id: 15, category: 'marketing', title: '15. 댓글 유도 문장 생성', text: '[주제] 글 마지막에 독자가 댓글 달고 싶게 만드는 질문 문장 5개를 30자 이내로 써 주세요.' },
    { id: 16, category: 'content', title: '16. 시리즈 기획 (10편)', text: '[주제]로 10편짜리 시리즈를 기획해 주세요. 편명·TPO·핵심내용·경험 요소·키워드를 표로 정리해 주세요.' },
    { id: 17, category: 'marketing', title: '17. 체험단 지원서 작성', text: '[제품서비스] 체험단 지원을 위한 블로그 자기소개 지원서를 200자로 써 주세요.' },
    { id: 18, category: 'marketing', title: '18. 협찬 제안 메일 작성', text: '브랜드에 보낼 협찬 제안 메일을 써 주세요. 내 블로그: [정보], 제안 브랜드: [브랜드], 제안 내용: [내용]' },
    { id: 19, category: 'marketing', title: '19. SNS 홍보 문구 추출', text: '다음 블로그 글을 인스타그램·카카오스토리에 공유할 홍보 문구를 각 150자로 써 주세요: [글 제목]' },
    { id: 20, category: 'seo', title: '20. 네이버 5대 가이드 진단', text: '다음 블로그 글을 네이버 가이드라인 5가지 기준(TPO·경험·비교·결과·이미지)으로 각각 점수(10점 만점)와 개선점을 알려주세요: [글 붙여넣기]' }
  ];

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPrompts = selectedCategory === 'all' 
    ? prompts 
    : prompts.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      
      {/* 상단 히어로 카드: 참조 이미지 스타일의 원형 건강/수익 점수 그래프 & 블로그 관제탑 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 좌측: 타이틀 및 핵심 가이드 */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-2xl border border-white/90 p-6 sm:p-8 rounded-3xl shadow-[0_10px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-800 text-xs font-bold mb-4">
              <span>✨ 2026 1인 공방 전자책 공식 연동</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight leading-snug">
              글쓰기보다 중요한 건 <span className="text-emerald-700">질문(프롬프트)</span>입니다.
            </h1>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              복붙만 해도 네이버 AI 브리핑(NAVER MATE) 상위 노출 초안이 완성되는 실전 프롬프트 20선입니다. 
              초안은 AI에게 맡기고, 사장님만의 생생한 손끝 경험을 더해 공방 매출을 극대화하세요![cite: 1]
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-neutral-200/60">
            <div className="bg-neutral-50/80 p-3 rounded-2xl border border-neutral-200/50">
              <p className="text-[11px] text-neutral-500 font-bold">네이버 AI 인용수</p>
              <p className="text-lg font-black text-emerald-700 mt-0.5">661회</p>
            </div>
            <div className="bg-neutral-50/80 p-3 rounded-2xl border border-neutral-200/50">
              <p className="text-[11px] text-neutral-500 font-bold">SEO 최적화율</p>
              <p className="text-lg font-black text-neutral-900 mt-0.5">94.8%</p>
            </div>
            <div className="bg-neutral-50/80 p-3 rounded-2xl border border-neutral-200/50">
              <p className="text-[11px] text-neutral-500 font-bold">이번 주 주문 전환</p>
              <p className="text-lg font-black text-emerald-700 mt-0.5">+32.4%</p>
            </div>
            <div className="bg-neutral-50/80 p-3 rounded-2xl border border-neutral-200/50">
              <p className="text-[11px] text-neutral-500 font-bold">AI 프롬프트</p>
              <p className="text-lg font-black text-neutral-900 mt-0.5">20선 탑재</p>
            </div>
          </div>
        </div>

        {/* 우측: 참조 이미지 스타일의 고품격 원형 건강/수익 점수 카드 (모바일 최적화) */}
        <div className="bg-white/85 backdrop-blur-2xl border border-white/90 p-6 rounded-3xl shadow-[0_10px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative w-36 h-36 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-emerald-100/60 border-4 border-emerald-500/30 shadow-inner mb-4">
            <div className="text-center">
              <span className="text-3xl font-black text-emerald-800 tracking-tight">92%</span>
              <p className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mt-0.5">Health Score</p>
            </div>
            {/* 원형 테두리 포인트 장식 */}
            <div className="absolute inset-0 rounded-full border-4 border-emerald-600 border-t-transparent animate-spin" style={{ animationDuration: '12s' }}></div>
          </div>

          <h3 className="font-bold text-neutral-900 text-sm">공방 블로그 경쟁력 지수</h3>
          <p className="text-xs text-neutral-500 mt-1">네이버 2026 AI 브리핑 기준 상위 1% 마스터 상태</p>
        </div>

      </div>

      {/* 필터 탭 바 */}
      <div className="flex flex-wrap items-center gap-2 bg-white/60 backdrop-blur-xl p-2 rounded-2xl border border-white/80 shadow-sm">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === 'all' ? 'bg-emerald-700 text-white shadow-md' : 'bg-white/70 text-neutral-600 hover:bg-white'}`}
        >
          전체 프롬프트 (20)
        </button>
        <button 
          onClick={() => setSelectedCategory('strategy')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === 'strategy' ? 'bg-emerald-700 text-white shadow-md' : 'bg-white/70 text-neutral-600 hover:bg-white'}`}
        >
          1. 주제 및 세팅
        </button>
        <button 
          onClick={() => setSelectedCategory('content')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === 'content' ? 'bg-emerald-700 text-white shadow-md' : 'bg-white/70 text-neutral-600 hover:bg-white'}`}
        >
          2~3장. 구조 및 초안
        </button>
        <button 
          onClick={() => setSelectedCategory('seo')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === 'seo' ? 'bg-emerald-700 text-white shadow-md' : 'bg-white/70 text-neutral-600 hover:bg-white'}`}
        >
          4~5장. SEO 및 비교·결과
        </button>
        <button 
          onClick={() => setSelectedCategory('marketing')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === 'marketing' ? 'bg-emerald-700 text-white shadow-md' : 'bg-white/70 text-neutral-600 hover:bg-white'}`}
        >
          마케팅 및 SNS 확장
        </button>
      </div>

      {/* 프롬프트 카드 그리드 (즉시 복사 가능) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPrompts.map((item) => (
          <div 
            key={item.id} 
            className="bg-white/85 backdrop-blur-xl border border-white/90 p-5 rounded-3xl shadow-[0_8px_25px_rgb(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-emerald-800 bg-emerald-600/10 px-3 py-1 rounded-full">
                  {item.title.split('.')[0]}번 프롬프트
                </span>
                <span className="text-[11px] font-mono text-neutral-400">ChatGPT / Claude 전용</span>
              </div>
              <h3 className="font-bold text-neutral-900 text-sm mb-2">{item.title}</h3>
              <div className="bg-neutral-900/5 p-3.5 rounded-2xl border border-neutral-200/60 font-mono text-xs text-neutral-700 leading-relaxed select-all">
                {item.text}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500 font-medium">[] 안의 텍스트만 내 공방 맞춤으로 수정하세요!</span>
              <button
                onClick={() => handleCopy(item.id, item.text)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  copiedId === item.id 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm'
                }`}
              >
                {copiedId === item.id ? (
                  <>✓ 복사 완료!</>
                <>프롬프트 복사하기</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 전자책 핵심 요약 배너 */}
      <div className="bg-gradient-to-r from-emerald-900 to-neutral-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="bg-emerald-500 text-neutral-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
            💡 긍정쌤의 핵심 원칙
          </span>
          <h3 className="text-lg sm:text-xl font-bold mt-3">"초안은 AI, 경험은 사장님"</h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
            AI가 써준 초안에 반드시 사장님의 실제 공방 시행착오와 수치, 직접 찍은 사진을 더해 네이버 가이드라인(경험 중심 SEO)을 충족시키세요[cite: 1].
          </p>
        </div>
        <div className="shrink-0">
          <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-center font-mono text-xs">
            <span className="text-emerald-400 font-bold">2026 네이버 메이트</span> 도전 중 🚀
          </div>
        </div>
      </div>

    </div>
  );
}