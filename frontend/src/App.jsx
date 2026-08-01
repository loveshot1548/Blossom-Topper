import React, { useState, useEffect } from 'react';

// 고급스러운 미니멀 SVG 아이콘 세트
const Icons = {
  Leaf: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  PlaySquare: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
  Upload: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Users: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Target: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  TrendingUp: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Hash: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>
};

export default function App() {
  const [activeTab, setActiveTab] = useState('콘텐츠 스튜디오');
  const [isUploading, setIsUploading] = useState(false);
  
  // 🚀 실시간 트렌드 상태 관리
  const [trends, setTrends] = useState([]);
  const [isLoadingTrends, setIsLoadingTrends] = useState(true);

  // 컴포넌트가 마운트될 때 n8n 웹훅에서 데이터 Fetch
  useEffect(() => {
    const fetchTrends = async () => {
      try {
        // n8n에서 만든 GET 방식 웹훅 URL을 입력하세요.
        const response = await fetch('http://localhost:5678/webhook/trends-data');
        
        // 정상 응답이 아닐 경우 강제로 에러를 발생시켜 catch 블록으로 이동
        if (!response.ok) throw new Error('네트워크 응답이 올바르지 않습니다.');
        
        const data = await response.json();
        setTrends(data);
      } catch (error) {
        console.error('트렌드 데이터를 불러오는 중 오류 발생:', error);
        // 통신 실패 시(혹은 웹훅 연결 전) 보여줄 기본(Fallback) 데이터
        setTrends([
          { rank: 1, keyword: '발포세라믹 화분', up: '+210%' },
          { rank: 2, keyword: '슈링클스 키링', up: '+185%' },
          { rank: 3, keyword: '제스모나이트 트레이', up: '+92%' }
        ]);
      } finally {
        setIsLoadingTrends(false);
      }
    };

    fetchTrends();
    
    // 주석 해제 시 5분마다 실시간 자동 갱신
    // const interval = setInterval(fetchTrends, 5 * 60 * 1000);
    // return () => clearInterval(interval);
  }, []);

  // 🚀 이미지 업로드 및 Vercel 자동 재배포 트리거
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // 1. n8n 웹훅으로 이미지 전송 (URL은 실제 n8n 웹훅 주소로 변경 필요)
      // const formData = new FormData();
      // formData.append('file', file);
      // await fetch('YOUR_N8N_WEBHOOK_URL', { method: 'POST', body: formData });

      // 2. Vercel Deploy Hook 호출 (재배포)
      // await fetch('YOUR_VERCEL_DEPLOY_HOOK_URL', { method: 'POST' });

      alert('성공적으로 업로드되었으며, 서버 재배포가 시작되었습니다.');
    } catch (error) {
      console.error('업로드 실패:', error);
      alert('업로드 중 오류가 발생했습니다.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen relative font-sans text-gray-900 p-4 md:p-8 box-border"
         style={{ 
           backgroundImage: 'url("https://images.unsplash.com/photo-1536657464919-892534f60d6e?q=80&w=2574&auto=format&fit=crop")',
           backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
         }}>
      
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-green-50/80 backdrop-blur-md pointer-events-none z-0"></div>

      {/* 헤더 네비게이션 */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-8 gap-4">
        <div className="flex items-center gap-2 font-extrabold text-xl">
          <span className="text-green-800"><Icons.Leaf /></span>
          <span className="tracking-tight text-gray-900">Blossom Topper</span>
        </div>

        {/* 탭 메뉴 */}
        <nav className="flex flex-wrap justify-center gap-2 bg-white/60 backdrop-blur-xl p-1.5 rounded-full shadow-sm border border-white/90">
          {['콘텐츠 스튜디오', '트래픽 & 리드', '인사이트 랩'].map((tab) => (
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
              <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto md:mx-0">촬영한 원본 미디어를 업로드하면 AI가 릴스와 숏폼으로 자동 편집하여 소셜 미디어에 발행합니다.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 카드 1: 업로드 영역 */}
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900"><span className="mr-2"><Icons.Upload /></span> 1. 원본 미디어 수집</h3>
                
                <label className="flex flex-col justify-center items-center h-48 border-2 border-dashed border-green-800/40 rounded-2xl bg-white/40 cursor-pointer hover:bg-white/60 transition-all">
                  <input type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} disabled={isUploading} />
                  <div className="text-gray-500 mb-4">{isUploading ? '업로드 및 배포 중...' : <Icons.PlaySquare />}</div>
                  <span className="text-sm text-gray-700 font-medium">작업물 미디어를 터치하여 업로드</span>
                  <span className="text-xs text-gray-500 mt-2">업로드 시 자동 배포(Vercel) 파이프라인 가동</span>
                </label>
              </div>

              {/* 카드 2: 배포 현황 */}
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900"><span className="mr-2"><Icons.PlaySquare /></span> 2. 멀티채널 배포 현황</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-4 border-b border-black/5">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Instagram 피드 & 릴스</div>
                      <div className="text-xs text-gray-600 mt-1">[신상] 글라스아트 썬캐처 (생성 완료)</div>
                    </div>
                    <button className="bg-green-800 text-white border-none px-4 py-2 rounded-xl text-xs font-bold cursor-pointer">즉시 발행</button>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-black/5">
                    <div>
                      <div className="text-sm font-bold text-gray-900">Naver Blog 포스팅</div>
                      <div className="text-xs text-gray-600 mt-1">SEO 최적화 원고 생성 중...</div>
                    </div>
                    <span className="text-xs text-gray-500 px-3 py-1.5 bg-black/5 rounded-xl font-bold">AI 작성 중</span>
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
                    <div className="text-xs text-gray-700 italic">"이번 주말 백일 잔치인데 혹시 급행 제작 가능한가요?"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3️⃣ 탭: 인사이트 랩 */}
        {activeTab === '인사이트 랩' && (
          <div className="animate-fade-in">
            <div className="mb-8 text-center md:text-left">
              <span className="text-xs font-bold text-green-800 bg-white/90 px-3 py-1.5 rounded-full uppercase">Data Analytics</span>
              <h1 className="text-3xl md:text-4xl font-extrabold my-4 text-gray-900 tracking-tight">알고리즘 및 해시태그 분석</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* 🚀 데이터 Fetch를 반영한 실시간 트렌드 영역 */}
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900"><span className="mr-2"><Icons.TrendingUp /></span> 실시간 공예 시장 트렌드</h3>
                
                <div className="flex flex-col gap-3">
                  {isLoadingTrends ? (
                    <div className="text-sm text-gray-500 text-center py-6 font-medium animate-pulse">
                      n8n 서버에서 트렌드 데이터를 불러오는 중...
                    </div>
                  ) : (
                    trends.map((trend, index) => (
                      <div key={index} className="flex items-center p-4 bg-white/50 rounded-2xl hover:bg-white/80 transition-colors">
                        <span className="text-lg font-extrabold text-green-800 w-8">{trend.rank}</span>
                        <span className="flex-1 text-sm font-bold text-gray-900">{trend.keyword}</span>
                        <span className="text-xs font-bold text-red-600">{trend.up}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
                <h3 className="flex items-center text-lg font-bold mb-6 text-gray-900"><span className="mr-2"><Icons.Hash /></span> 고효율 해시태그 추출기</h3>
                <div className="p-4 bg-white/40 rounded-2xl border border-white/60">
                  <div className="text-xs text-gray-600 mb-3">AI 추천: 이번 주 전환율이 가장 높은 조합</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-green-800/10 text-green-800 px-3 py-1.5 rounded-full font-bold">#제스모나이트소품</span>
                    <span className="text-xs bg-green-800/10 text-green-800 px-3 py-1.5 rounded-full font-bold">#백일토퍼제작</span>
                    <span className="text-xs bg-black/5 text-gray-700 px-3 py-1.5 rounded-full">#발포세라믹</span>
                  </div>
                  <button className="w-full bg-green-800 text-white font-bold text-sm py-3 rounded-xl transition-colors hover:bg-green-900 shadow-md hover:shadow-lg">
                    클립보드에 복사
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}