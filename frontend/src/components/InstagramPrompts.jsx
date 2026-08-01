import React, { useState } from 'react';

export default function InstagramPrompts() {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 10개 카테고리 및 프롬프트 데이터베이스
  const categories = [
    { id: 'all', name: '전체 보기' },
    { id: 'c1', name: '1️⃣ 프로필 세팅 & 진단' },
    { id: 'c2', name: '2️⃣ 콘텐츠 기획 & 주제' },
    { id: 'c3', name: '3️⃣ 릴스 주제 & 대본' },
    { id: 'c4', name: '4️⃣ 카드뉴스 & 캐션' },
    { id: 'c5', name: '5️⃣ 해시태그 & SEO' },
    { id: 'c6', name: '6️⃣ 팔로워 & 참여 유도' },
    { id: 'c7', name: '7️⃣ DM 응대 & 고객' },
    { id: 'c8', name: '8️⃣ 리드마그넷 퍼널' },
    { id: 'c9', name: '9️⃣ 수익화 설계' },
    { id: 'c10', name: '🔟 분석·개선 & 브랜딩' }
  ];

  const promptsData = [
    // 1. 프로필 세팅 & 진단
    { id: 1, cat: 'c1', title: '01. 프로필 종합 진단 (필수 ⭐)', text: '당신은 인스타그램 프로필 최적화 전문가입니다. 아래 계정의 프로필을 분석하고, 수익성과 전환율을 높이기 위한 구체적인 개선점을 제안해 주세요.\n\n분석 항목:\n- 이름 (SEO & 명확성): 전문성과 키워드를 잘 전달하고 있나요?\n- 첫 줄 (핵심 가치 제안): 누구를 돕는지, 어떤 문제를 해결하는지가 명확한가요?\n- 둘째 줄 (방법/전문성): 어떤 방식이나 도구로 문제를 해결하는지?\n- 셋째 줄 (권위 & 성과): 신뢰를 줄 수 있는 숫자가 포함되어 있나요?\n- 넷째 줄 (CTA): 팔로우나 링크 클릭 유도가 명확한가요?\n\n최종 지시사항: 위 모든 항목을 분석한 뒤 최적화된 프로필 문구 전체(이름 + 4줄)를 제안해 주세요.' },
    { id: 2, cat: 'c1', title: '02. 이름(닉네임) 최적화', text: '내 분야는 [분야], 타겟은 [타겟]이야. 검색이 잘 되고 전문성이 바로 보이는 인스타 이름을 "이름 | 키워드" 구조로 10개 제안해줘. 공백 포함 64자 이내로.' },
    { id: 3, cat: 'c1', title: '03. 소개글 4줄 공식 작성', text: '나는 [분야]에서 [타겟]을 돕는 사람이야. 인스타 소개글을 "핵심가치 → 방법 → 성과/신뢰 → CTA" 4줄 구조, 전체 150자 이내로 3가지 버전 써줘. 이모지도 줄마다 1개씩.' },
    { id: 4, cat: 'c1', title: '04. 타겟 페르소나 정의', text: '내 계정 주제는 [주제]야. 이 계정을 팔로우할 핵심 타겟 1명을 나이/직업/고민/원하는 변화로 구체적으로 정의하고, 이 사람이 밤 11시에 인스타를 켜는 이유까지 설명해줘.' },
    { id: 5, cat: 'c1', title: '05. 포지셔닝 한 문장', text: '내 경력은 [경력], 팔고 싶은 것은 [상품/서비스]야. "나는 [누구]가 [문제]를 [방법]으로 해결하도록 돕는다" 형식의 포지셔닝 문장 5개를 만들고 가장 차별화되는 1개를 추천해줘.' },

    // 2. 콘텐츠 기획 & 주제 발굴
    { id: 11, cat: 'c2', title: '11. 콘텐츠 기둥 4개 잡기', text: '내 계정 주제는 [주제], 목표는 [팔로워 증가/수익화]야. 계정을 관통할 콘텐츠 기둥(필러) 4개를 정하고, 기둥별 예시 주제 5개씩 총 20개를 줘.' },
    { id: 12, cat: 'c2', title: '12. 30일치 콘텐츠 캘린더', text: '위 기둥 4개로 30일치 업로드 캘린더를 만들어줘. 요일별 포맷(릴스/카드뉴스/스토리)과 각 날의 제목 후보까지 표로 정리해줘.' },
    { id: 13, cat: 'c2', title: '13. 저장 폭발 주제 20개', text: '[타겟]이 "나중에 다시 보려고" 저장할 만한 [주제] 콘텐츠 아이디어 20개를 줘. 각각 왜 저장하게 되는지 이유도 한 줄씩 붙여줘.' },
    { id: 14, cat: 'c2', title: '14. 타겟 고민 리스트업', text: '[타겟]이 [주제]와 관련해 갖는 고민·질문·오해 30개를 검색어 형태로 뽑아줘. 그중 콘텐츠로 만들면 반응 좋을 10개에 ⭐ 표시해줘.' },

    // 3. 릴스 주제 & 대본
    { id: 21, cat: 'c3', title: '21. 릴스 주제 30개', text: '내 계정 주제는 [주제], 타겟은 [타겟]이야. 조회수 나올 릴스 주제 30개를 "정보형 10 / 공감형 10 / 후킹형 10"으로 나눠서 제목 형태로 줘.' },
    { id: 22, cat: 'c3', title: '22. 3초 후킹 문구', text: '릴스 주제는 [주제]야. 첫 3초에 이탈을 막는 오프닝 문구 10개를 질문형/반전형/숫자형으로 섞어서 줘. 각 문구가 왜 멈추게 만드는지 한 줄 설명도.' },
    { id: 23, cat: 'c3', title: '23. 30초 릴스 대본', text: '[주제]로 30초 릴스 대본을 써줘. 구조는 훅(3초) → 문제 제기 → 해결책 3가지 → CTA. 화면에 띄울 자막과 내가 말할 멘트를 나눠서 표로 정리해줘.' },

    // 4. 카드뉴스 & 캐션
    { id: 31, cat: 'c4', title: '31. 카드뉴스 8장 구성', text: '[주제]로 카드뉴스 8장을 기획해줘. 1장은 후킹, 2~7장은 본문(장당 핵심 메시지 1개), 8장은 저장·팔로우 유도. 장별 문구를 그대로 복사해 쓸 수 있게 써줘.' },
    { id: 32, cat: 'c4', title: '32. 첫 장 후킹 카피 10개', text: '카드뉴스 주제는 [주제]야. 피드에서 손을 멈추게 하는 첫 장 카피 10개를 손실 경고형/숫자형/반전형으로 섞어서 줘.' },
    { id: 33, cat: 'c4', title: '33. 캐션(본문) 작성', text: '[게시물 내용]에 대한 캐션을 써줘. 첫 줄은 더보기를 누르게 만드는 훅, 본문은 공감+정보, 마지막은 댓글 유도 질문으로. 줄바꿈과 이모지 위치까지 완성본으로.' },

    // 5. 해시태그 & SEO
    { id: 41, cat: 'c5', title: '41. 해시태그 30개 세트', text: '내 게시물 주제는 [주제]야. 대형(10만+)/중형(1~10만)/소형(1만 이하) 해시태그를 10개씩 섞은 30개 세트를 만들어줘. 왜 이 비율이 유리한지도 설명해줘.' },
    { id: 47, cat: 'c5', title: '47. 지역 타겟 해시태그', text: '내 가게는 [지역]에 있는 [업종]이야. 지역 손님이 실제 검색하는 지역+업종 조합 해시태그 20개와, 위치 태그·협업 전략까지 제안해줘.' },

    // 6. 팔로워 & 참여 유도
    { id: 51, cat: 'c6', title: '51. 댓글 유도 질문', text: '[주제] 게시물 끝에 붙일 댓글 유도 질문 15개를 줘. 답하기 쉽고(1번/2번 고르기, 한 단어 답변), 다른 사람 댓글이 궁금해지는 형태로.' },
    { id: 53, cat: 'c6', title: '53. 팔로우 이벤트 기획', text: '내 계정 [주제]에서 [경품/혜택]을 걸고 할 팔로우+댓글 이벤트를 기획해줘. 참여 조건, 안내 문구, 당첨 발표 문구, 주의사항까지 세트로.' },

    // 7. DM 응대 & 고객 관리
    { id: 61, cat: 'c7', title: '61. 신규 팔로워 환영 DM', text: '내 계정은 [주제] 계정이야. 새 팔로워에게 보낼 환영 DM을 써줘. 광고 느낌 없이 반갑게, 마지막에 가벼운 질문 하나로 대화가 시작되게, 4줄 이내로.' },
    { id: 63, cat: 'c7', title: '63. 상담 → 구매 전환 대화', text: '[상품/서비스]에 대해 DM 문의가 오면 구매까지 이어지는 대화 흐름을 설계해줘. 질문 단계 → 니즈 확인 → 솔루션 제시 → 가격 안내 → 마감 멘트 순서로.' },

    // 8. 리드마그넷 퍼널
    { id: 71, cat: 'c8', title: '71. 리드마그넷 아이디어 10개', text: '내 분야는 [분야], 최종 판매 상품은 [상품]이야. 타겟이 댓글 달고서라도 받고 싶을 무료 자료(리드마그넷) 아이디어 10개를 줘. 각각 유료 상품과 어떻게 연결되는지도.' },
    { id: 74, cat: 'c8', title: '74. 자동DM 시나리오 설계', text: '댓글 키워드 [키워드]에 반응하는 자동DM 시나리오를 설계해줘. 1차: 자료 전달 + 감사 인사, 2차: 자료 잘 받았는지 확인 + 다음 행동 제안. 각 메시지 전문을 써줘.' },

    // 9. 수익화 설계
    { id: 81, cat: 'c9', title: '81. 수익화 모델 진단', text: '내 계정 주제는 [주제], 팔로워는 [N]명, 내 강점은 [강점]이야. 지금 단계에서 가능한 수익화 모델을 현실성 순으로 평가하고 가장 먼저 시작할 1개와 그 이유를 줘.' },
    { id: 82, cat: 'c9', title: '82. 지식창업 상품 설계', text: '내 경험/전문성은 [경험]이야. 이걸로 만들 수 있는 지식 상품(전자책/강의/컨설팅)을 가격대별 3단 구성으로 설계해줘. 핵심 약속과 목차 초안까지.' },

    // 10. 분석·개선 & 브랜딩
    { id: 91, cat: 'c10', title: '91. 인사이트 지표 해석', text: '[인사이트 화면 캡처 업로드] 이 데이터를 초보자 눈높이로 해석해줘. 잘하고 있는 지표, 위험 신호, 당장 손봐야 할 1가지를 순서대로 알려줘.' },
    { id: 97, cat: 'c10', title: '97. 말투·톤 정의 (내 문체)', text: '내가 지금까지 쓴 캐션 3개를 보여줄게: [캐션 붙여넣기]. 내 글의 톤 특징을 분석해서 "내 문체 가이드"로 정리해줘. 앞으로 AI에게 글을 맡길 때 이 가이드만 주면 내 말투가 나오게.' }
  ];

  // 필터링 로직
  const filteredPrompts = promptsData.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.cat === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="animate-fade-in space-y-6 max-w-7xl mx-auto">
      {/* 상단 안내 섹션 */}
      <div className="bg-white/85 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-green-800/20 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">INSTAGRAM PROMPTS 100</span>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-2">인스타그램 프롬프트 모음 아카이브</h1>
          <p className="text-gray-600 mt-1">원하는 프롬프트를 검색하거나 카테고리별로 골라 클릭 한 번에 복사하세요.</p>
        </div>
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="프롬프트 키워드 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
          />
        </div>
      </div>

      {/* 카테고리 가로 스크롤 네비게이션 */}
      <div className="flex overflow-x-auto gap-2 pb-2 custom-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
              selectedCategory === cat.id 
                ? 'bg-green-800 text-white shadow-md' 
                : 'bg-white/70 text-gray-600 hover:bg-white border border-gray-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 프롬프트 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPrompts.length > 0 ? (
          filteredPrompts.map((item) => (
            <div key={item.id} className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 border border-green-800/20 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                  <span className="text-xs bg-gray-100 text-gray-600 font-semibold px-2.5 py-1 rounded-lg">ID: #{item.id}</span>
                </div>
                <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-4 text-sm text-gray-700 whitespace-pre-line font-mono leading-relaxed mb-4 max-h-48 overflow-y-auto custom-scrollbar">
                  {item.text}
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  {copiedId === item.id ? '클립보드에 복사 완료! ✨' : '[대괄호]를 본인 상황에 맞게 수정하세요.'}
                </span>
                <button
                  onClick={() => handleCopy(item.id, item.text)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                    copiedId === item.id ? 'bg-green-600 text-white' : 'bg-gray-900 text-white hover:bg-black'
                  }`}
                >
                  {copiedId === item.id ? '복사됨 ✓' : '📋 프롬프트 복사'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-white/50 backdrop-blur-md rounded-3xl border border-gray-200">
            <p className="text-gray-500 font-medium">검색 결과가 없습니다. 다른 검색어를 입력해 보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
}