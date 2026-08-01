import React, { useState, useEffect } from 'react';

// 고급스러운 미니멀 SVG 아이콘 세트
const Icons = {
  Leaf: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  PlaySquare: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
  Upload: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Users: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Target: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  TrendingUp: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Hash: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>,
  Book: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
};

export default function App() {
  const [activeTab, setActiveTab] = useState('콘텐츠 스튜디오');
  
  // 🚀 [기능 1] 이미지 업로드 시뮬레이션 상태
  const [uploadState, setUploadState] = useState('idle'); 
  const [trends, setTrends] = useState([]);
  
  // 🚀 [기능 2] 2026 트렌드 기반 프롬프트 대백과 사전 상태 업데이트
  const [prompts, setPrompts] = useState([
    { id: 1, category: 'SNS 캡션', title: '제스모나이트 트레이 릴스 대본', content: '공방에서 만든 제스모나이트 트레이 제작 과정을 릴스로 올릴 거야. 마블링과 테라조 기법의 시각적 아름다움을 강조하고, #JesmoniteArt #홈데코소품 해시태그를 넣어서 감성적인 톤으로 대본을 작성해줘.' },
    { id: 2, category: '블로그 SEO', title: '발포세라믹 업사이클링 클래스 모객', content: '2026년 친환경 트렌드인 발포세라믹 오브제 만들기 원데이 클래스를 홍보하는 네이버 블로그 포스팅을 작성해줘. 업사이클링 트렌드와 결합해 초보자도 쉽게 참여할 수 있음을 강조하고, 검색 유입을 위해 #EcoCraft #발포세라믹 키워드를 활용해줘.' },
    { id: 3, category: '디자인 에셋', title: '맞춤형 기념일 토퍼 홍보 문구', content: '돌잔치 및 웨딩 맞춤 제작 케이크 토퍼 홍보를 위한 인스타그램 피드 카피를 3가지 제안해줘. 이니셜 커스터마이징이 가능하다는 점을 어필하고 짧고 강렬하게 작성해줘!' }
  ]);
  const [newPrompt, setNewPrompt] = useState({ category: 'SNS 캡션', title: '', content: '' });

  // 🚀 2026년 상반기 공예 트렌드 Top 10 데이터 로드
  useEffect(() => {
    setTrends([
      { rank: 1, keyword: '제스모나이트 트레이/화분', detail: '감각적 인테리어 소품, 마블링 기법 인기', tag: '해시태그 급증' },
      { rank: 2, keyword: '글라스아트 무드등', detail: '투명감·빛 활용, 선물용 수요 ↑', tag: '리뷰 활발' },
      { rank: 3, keyword: '토퍼 케이크 데코', detail: '맞춤 제작·이니셜·웨딩/돌잔치 수요 폭발', tag: '수요 폭발' },
      { rank: 4, keyword: '발포세라믹 오브제', detail: '친환경·질감 표현, 업사이클링 결합', tag: 'DIY 인기' },
      { rank: 5, keyword: '원데이 클래스', detail: '소규모·프라이빗 클래스 선호', tag: '예약 증가' },
      { rank: 6, keyword: '맞춤 제작 (Custom)', detail: '이름·컬러·문양 커스터마이즈', tag: 'MZ 픽' },
      { rank: 7, keyword: '테라조 패턴', detail: '인테리어 블로그·카페에서 인기', tag: '트렌드' },
      { rank: 8, keyword: '업사이클링 공예', detail: '친환경·윤리적 제작 강조', tag: 'Eco Craft' },
      { rank: 9, keyword: '힙트래디션', detail: '전통 기법 + 현대 디자인 융합', tag: 'K-Craft' },
      { rank: 10, keyword: '수익형 취미', detail: '작품 판매 및 강사 전환', tag: '창업 후기' }
    ]);
  }, []);

  const handleSimulatedUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadState('uploading');
    setTimeout(() => {
      setUploadState('ai_processing');
      setTimeout(() => {
        setUploadState('done');
        setTimeout(() => setUploadState('idle'), 4000); 
      }, 2000);
    }, 1500);
  };

  const handleAddPrompt = (e) => {
    e.preventDefault();
    if (!newPrompt.title || !newPrompt.content) return;
    setPrompts([{ ...newPrompt, id: Date.now() }, ...prompts]);
    setNewPrompt({ category: 'SNS 캡션', title: '', content: '' }); 
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('프롬프트가 클립보드에 복사되었습니다!');
  };

  return (
    <div className="min-h-screen relative font-sans text-gray-900 p-4 md:p-8 box-border"
         style={{ 
           backgroundImage: 'url("https://images.unsplash.com/photo-1536657464919-892534f60d6e?q=80&w=2574&auto=format&fit=crop")',
           backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
         }}>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-green-50/90 backdrop-blur-md pointer-events-none z-0"></div>

      <header className="relative z-10 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-8 gap-4">
        <div className="flex items-center gap-2 font-extrabold text-xl">
          <span className="text-green-800"><Icons.Leaf /></span>
          <span className="tracking-tight text-gray-900">Blossom Topper</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-2 bg-white/60 backdrop-blur-xl p-1.5 rounded-full shadow-sm border border-white/90">
          {['콘텐츠 스튜디오', '트래픽 & 리드', '인사이트 랩', '프롬프트 사전'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              <span className="flex items-center justify-center">
                {tab === '콘텐츠 스튜디오' && <Icons.PlaySquare />}
                {tab === '트래픽 & 리드' && <Icons.Users />}
                {tab === '인사이트 랩' && <Icons.TrendingUp />}
                {tab === '프롬프트 사전' && <Icons.Book />}
              </span>
              <span className="hidden sm:inline">{tab}</span>
            </button>
          ))}
        </nav>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto">
        
        {/* 1️⃣ 탭: 콘텐츠 스튜디오 */}
        {activeTab === '콘텐츠 스튜디오' && (
          <div className="animate-fade-in">
            <div className="mb-8 text-center md:text-left">
              <span className="text-xs font-bold text-green-800 bg-white/90 px-3 py-1.5 rounded-full uppercase">Automated Publishing</span>
              <h1 className="text-3xl md:text-4xl font-extrabold my-4 text-gray-900 tracking-tight">AI 미디어 제작 및 자동 배포</h1>
              <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto md:mx-0">촬영한 원본 미디어를 업로드하면 AI가 릴스와 숏폼으로 자동 편집하여 발행합니다.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900"><span className="mr-2"><Icons.Upload /></span> 1. 원본 미디어 수집</h3>
                
                <label className={`flex flex-col justify-center items-center h-48 border-2 border-dashed rounded-2xl transition-all cursor-pointer
                  ${uploadState === 'idle' ? 'border-green-800/40 bg-white/40 hover:bg-white/60' : ''}
                  ${uploadState === 'uploading' ? 'border-blue-500 bg-blue-50/50' : ''}
                  ${uploadState === 'ai_processing' ? 'border-purple-500 bg-purple-50/50' : ''}
                  ${uploadState === 'done' ? 'border-green-500 bg-green-50/50' : ''}
                `}>
                  <input type="file" className="hidden" accept="image/*,video/*" onChange={handleSimulatedUpload} disabled={uploadState !== 'idle'} />
                  
                  {uploadState === 'idle' && (
                     <>
                        <div className="text-gray-500 mb-4"><Icons.PlaySquare /></div>
                        <span className="text-sm text-gray-700 font-medium">작업물 미디어를 터치하여 업로드</span>
                     </>
                  )}
                  {uploadState === 'uploading' && <span className="text-sm font-bold text-blue-600 animate-pulse">📤 클라우드로 미디어 전송 중...</span>}
                  {uploadState === 'ai_processing' && <span className="text-sm font-bold text-purple-600 animate-pulse">🤖 AI가 릴스 대본 및 해시태그 추출 중...</span>}
                  {uploadState === 'done' && <span className="text-sm font-bold text-green-700">✨ 미디어 처리 완료! 멀티채널 배포 대기 중</span>}
                </label>
              </div>

              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900"><span className="mr-2"><Icons.PlaySquare /></span> 2. 멀티채널 배포 현황</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-4 border-b border-black/5">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Instagram 피드 & 릴스</div>
                      <div className="text-xs text-gray-600 mt-1">[신상] 발포세라믹 오브제 (생성 완료)</div>
                    </div>
                    <button className="bg-green-800 text-white border-none px-4 py-2 rounded-xl text-xs font-bold cursor-pointer hover:bg-green-900">즉시 발행</button>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-black/5">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Naver Blog 포스팅</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {uploadState === 'ai_processing' ? 'SEO 최적화 원고 생성 중...' : '원고 대기 중'}
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1.5 rounded-xl font-bold ${uploadState === 'ai_processing' ? 'bg-purple-100 text-purple-700' : 'bg-black/5 text-gray-500'}`}>
                      {uploadState === 'ai_processing' ? 'AI 작성 중' : '대기 중'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2️⃣ 탭: 트래픽 & 리드 */}
        {activeTab === '트래픽 & 리드' && (
          <div className="animate-fade-in">
            <div className="mb-8 text-center md:text-left">
              <span className="text-xs font-bold text-green-800 bg-white/90 px-3 py-1.5 rounded-full uppercase">Lead Generation & CRM</span>
              <h1 className="text-3xl md:text-4xl font-extrabold my-4 text-gray-900 tracking-tight">스마트 트래픽 및 리드 제어</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900"><span className="mr-2"><Icons.Users /></span> 실시간 트래픽 요약</h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 bg-white/50 p-4 rounded-2xl border border-white/80">
                    <span className="block text-xs text-gray-600 mb-1">금일 블로그 유입</span>
                    <strong className="text-3xl font-light text-gray-900">342</strong>
                  </div>
                  <div className="flex-1 bg-white/50 p-4 rounded-2xl border border-white/80">
                    <span className="block text-xs text-gray-600 mb-1">인스타 프로필 클릭</span>
                    <strong className="text-3xl font-light text-gray-900">89</strong>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900"><span className="mr-2"><Icons.Target /></span> 실시간 잠재고객(Lead) 알림</h3>
                <div className="flex flex-col gap-4">
                  <div className="bg-white/60 p-4 rounded-2xl border border-white/80">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold">카카오채널 문의 (s**_k)</span>
                      <span className="text-[10px] bg-red-100 text-red-700 px-2 py-1 rounded-lg font-bold">구매 확률 94%</span>
                    </div>
                    <div className="text-xs text-gray-700 italic">"이번 주말 돌잔치인데 맞춤 토퍼 급행 제작 가능한가요?"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3️⃣ 탭: 인사이트 랩 (2026 트렌드 완벽 적용!) */}
        {activeTab === '인사이트 랩' && (
          <div className="animate-fade-in">
            <div className="mb-8 text-center md:text-left">
              <span className="text-xs font-bold text-green-800 bg-white/90 px-3 py-1.5 rounded-full uppercase">Data Analytics</span>
              <h1 className="text-3xl md:text-4xl font-extrabold my-4 text-gray-900 tracking-tight">2026 공예 트렌드 & 해시태그 분석</h1>
              <p className="text-gray-700 text-sm md:text-base mt-2">상반기 공예 트렌드는 ‘인테리어 소품 중심의 감각적 공예’와 ‘SNS 확산형 키워드’가 핵심입니다.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* 📊 2026 상반기 공예 시장 트렌드 Top 10 */}
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90 h-[500px] overflow-y-auto custom-scrollbar">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900 sticky top-0 bg-white/90 backdrop-blur-md p-2 rounded-xl z-10">
                  <span className="mr-2"><Icons.TrendingUp /></span> 2026 공예 트렌드 Top 10
                </h3>
                
                <div className="flex flex-col gap-3 mt-4">
                  {trends.map((trend) => (
                    <div key={trend.rank} className="flex flex-col p-4 bg-white/50 rounded-2xl hover:bg-white/80 transition-colors border border-white/60">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <span className="text-lg font-extrabold text-green-800 w-8">{trend.rank}</span>
                          <span className="text-sm font-bold text-gray-900">{trend.keyword}</span>
                        </div>
                        <span className="text-[10px] font-bold bg-red-50 text-red-600 px-2 py-1 rounded-md">{trend.tag}</span>
                      </div>
                      <span className="text-xs text-gray-600 pl-8">{trend.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 💡 2026 하반기 추천 해시태그 */}
              <div className="flex flex-col gap-6">
                <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                  <h3 className="flex items-center text-lg font-bold mb-4 text-gray-900"><span className="mr-2"><Icons.Hash /></span> 하반기 고효율 해시태그 세트</h3>
                  <p className="text-xs text-gray-600 mb-4">비주얼 중심의 인스타그램과 DIY·창업형 블로그 키워드를 공략하세요.</p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/40 rounded-2xl border border-white/60">
                      <div className="text-xs font-bold text-gray-800 mb-2">🎨 제스모나이트 & 글라스아트 (인스타 추천)</div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs bg-green-800/10 text-green-800 px-3 py-1.5 rounded-full font-bold">#JesmoniteArt</span>
                        <span className="text-xs bg-green-800/10 text-green-800 px-3 py-1.5 rounded-full font-bold">#GlassArtLamp</span>
                        <span className="text-xs bg-black/5 text-gray-700 px-3 py-1.5 rounded-full">#DIY인테리어</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white/40 rounded-2xl border border-white/60">
                      <div className="text-xs font-bold text-gray-800 mb-2">🌱 발포세라믹 & 업사이클링 (블로그 추천)</div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs bg-green-800/10 text-green-800 px-3 py-1.5 rounded-full font-bold">#EcoCraft</span>
                        <span className="text-xs bg-green-800/10 text-green-800 px-3 py-1.5 rounded-full font-bold">#친환경공예</span>
                        <span className="text-xs bg-black/5 text-gray-700 px-3 py-1.5 rounded-full">#발포세라믹</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white/40 rounded-2xl border border-white/60">
                      <div className="text-xs font-bold text-gray-800 mb-2">📈 수익형 창업 & 트렌드 확산형</div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-blue-800/10 text-blue-800 px-3 py-1.5 rounded-full font-bold">#수익형취미</span>
                        <span className="text-xs bg-blue-800/10 text-blue-800 px-3 py-1.5 rounded-full font-bold">#원데이클래스</span>
                        <span className="text-xs bg-black/5 text-gray-700 px-3 py-1.5 rounded-full">#맞춤토퍼</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4️⃣ 탭: 프롬프트 사전 */}
        {activeTab === '프롬프트 사전' && (
          <div className="animate-fade-in">
            <div className="mb-8 text-center md:text-left">
              <span className="text-xs font-bold text-green-800 bg-white/90 px-3 py-1.5 rounded-full uppercase">Prompt Library</span>
              <h1 className="text-3xl md:text-4xl font-extrabold my-4 text-gray-900 tracking-tight">프롬프트 대백과 사전</h1>
              <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto md:mx-0">자주 사용하는 AI 명령어와 자동화 템플릿을 저장하고 클릭 한 번으로 복사하세요.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90 h-fit">
                <h3 className="text-lg font-bold mb-4 text-gray-900">새 프롬프트 추가</h3>
                <form onSubmit={handleAddPrompt} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">카테고리</label>
                    <select 
                      value={newPrompt.category} 
                      onChange={(e) => setNewPrompt({...newPrompt, category: e.target.value})}
                      className="w-full p-2 text-sm rounded-xl border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-800"
                    >
                      <option>SNS 캡션</option>
                      <option>블로그 SEO</option>
                      <option>디자인 에셋</option>
                      <option>자동화 워크플로우</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">제목 (용도)</label>
                    <input 
                      type="text" 
                      placeholder="예: 맞춤 토퍼 인스타 해시태그 생성"
                      value={newPrompt.title}
                      onChange={(e) => setNewPrompt({...newPrompt, title: e.target.value})}
                      className="w-full p-2 text-sm rounded-xl border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">프롬프트 내용</label>
                    <textarea 
                      rows="4"
                      placeholder="AI에게 지시할 명령어를 입력하세요..."
                      value={newPrompt.content}
                      onChange={(e) => setNewPrompt({...newPrompt, content: e.target.value})}
                      className="w-full p-2 text-sm rounded-xl border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-800 resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-green-800 text-white font-bold py-2.5 rounded-xl hover:bg-green-900 transition-colors">
                    저장하기
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-4">
                {prompts.map((prompt) => (
                  <div key={prompt.id} className="bg-white/70 backdrop-blur-2xl rounded-3xl p-5 shadow-sm border border-white/90 transition-all hover:bg-white/90">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[10px] font-bold text-green-800 bg-green-100 px-2 py-1 rounded-md">{prompt.category}</span>
                        <h4 className="text-md font-bold text-gray-900 mt-2">{prompt.title}</h4>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(prompt.content)}
                        className="text-xs font-bold bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        복사
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 p-3 bg-white/50 rounded-xl border border-gray-100 whitespace-pre-wrap">
                      {prompt.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}