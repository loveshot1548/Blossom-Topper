import React, { useState, useEffect } from 'react';

import HomeDashboard from './components/HomeDashboard.jsx';
import ContentStudio from './components/ContentStudio.jsx';
import AiMarketing from './components/AiMarketing.jsx';
import IntegrationHub from './components/IntegrationHub.jsx';
import WeeklyReport from './components/WeeklyReport.jsx';
import YearlyCalendar from './components/YearlyCalendar.jsx';
import InstagramPrompts from './components/InstagramPrompts.jsx';
import SocialMonitor from './components/SocialMonitor.jsx';

const Icons = {
  Leaf: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  Home: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  Monitor: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  Studio: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  Marketing: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>,
  Hub: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  Report: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Calendar: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Menu: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
};

export default function App() {
  const [activeTab, setActiveTab] = useState('HomeDashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [traffic, setTraffic] = useState({ blog: 412, insta: 128, store: 85 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTraffic(prev => ({
        blog: prev.blog + (Math.random() > 0.6 ? 1 : 0),
        insta: prev.insta + (Math.random() > 0.8 ? 1 : 0),
        store: prev.store + (Math.random() > 0.9 ? 1 : 0)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const weeklyData = [
    { period: '7월 5주차', craft: '슈링클스 키링', type: '주문제작', count: 42, revenue: '630,000', trend: 'up' },
    { period: '7월 5주차', craft: '발포세라믹 화분', type: '원데이클래스', count: 18, revenue: '900,000', trend: 'up' },
    { period: '7월 5주차', craft: '제스모나이트 트레이', type: '주문제작', count: 55, revenue: '1,100,000', trend: 'stable' },
    { period: '7월 5주차', craft: '페이퍼 아트 토퍼', type: '주문제작', count: 89, revenue: '890,000', trend: 'up' }
  ];

  const yearlySchedule = [
    { month: '4월-5월', event: '가정의 달 피크', target: '페이퍼 토퍼, 슈링클스 키링 세트' },
    { month: '7월-8월', event: '여름 인테리어 기획전', target: '제스모나이트 마블링 트레이' },
    { month: '9월-10월', event: '가을 업사이클링 클래스', target: '발포세라믹 오브제 제작' }
  ];

  const integrations = [
    { name: 'n8n Workflow', status: 'connected', latency: '42ms', lastSync: '방금 전' },
    { name: 'Python Data Scraper', status: 'connected', latency: '120ms', lastSync: '1시간 전' },
    { name: 'Canva Design API', status: 'idle', latency: '-', lastSync: '어제' },
    { name: 'Notion Database', status: 'connected', latency: '85ms', lastSync: '10분 전' }
  ];

  const tabs = [
    { id: 'HomeDashboard', label: '대시보드', icon: <Icons.Home /> },
    { id: 'SocialMonitor', label: '소셜 모니터링', icon: <Icons.Monitor /> },
    { id: 'ContentStudio', label: '콘텐츠 스튜디오', icon: <Icons.Studio /> },
    { id: 'AiMarketing', label: 'AI 마케팅', icon: <Icons.Marketing /> },
    { id: 'InstagramPrompts', label: '인스타 프롬프트', icon: <Icons.Marketing /> },
    { id: 'IntegrationHub', label: '연동 허브', icon: <Icons.Hub /> },
    { id: 'WeeklyReport', label: '7월 5주 리포트', icon: <Icons.Report /> },
    { id: 'YearlyCalendar', label: '연간 일정', icon: <Icons.Calendar /> }
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'HomeDashboard':
        return <HomeDashboard traffic={traffic} />;
      case 'SocialMonitor':
        return <SocialMonitor />;
      case 'ContentStudio':
        return <ContentStudio />;
      case 'AiMarketing':
        return <AiMarketing />;
      case 'InstagramPrompts':
        return <InstagramPrompts />;
      case 'IntegrationHub':
        return <IntegrationHub integrations={integrations} />;
      case 'WeeklyReport':
        return <WeeklyReport weeklyData={weeklyData} />;
      case 'YearlyCalendar':
        return <YearlyCalendar schedule={yearlySchedule} />;
      default:
        return <HomeDashboard traffic={traffic} />;
    }
  };

  return (
    <div className="min-h-screen relative font-sans text-neutral-800 p-4 md:p-8 box-border selection:bg-emerald-200 selection:text-emerald-900"
         style={{ 
           backgroundImage: 'url("https://images.unsplash.com/photo-1536657464919-892534f60d6e?q=80&w=2574&auto=format&fit=crop")',
           backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
         }}>
      
      {/* 맑고 화사한 글래스모피즘 오버레이 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-emerald-50/75 to-neutral-100/80 backdrop-blur-xl pointer-events-none z-0"></div>

      {/* 모던하고 깔끔한 상단 헤더 (참조 디자인 반영: 좌측 로고, 중앙 필형 탭바, 우측 유틸리티) */}
      <header className="relative z-50 sticky top-4 max-w-7xl mx-auto mb-10 bg-white/70 backdrop-blur-2xl border border-white/90 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-6 py-3 transition-all">
        <div className="flex items-center justify-between gap-4">
          
          {/* 좌측: 로고 및 브랜드 명칭 (Blossom Topper) */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-700 shadow-sm">
              <Icons.Leaf />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base tracking-tight text-neutral-900">Blossom Topper</span>
                <span className="text-[10px] font-mono font-bold tracking-wider bg-emerald-700 text-white px-2 py-0.5 rounded-full shadow-sm">v2.6</span>
              </div>
              <p className="text-[11px] text-emerald-800/70 font-semibold">Craft Control Center</p>
            </div>
          </div>

          {/* 중앙: 모던 캡슐 네비게이션 탭 (데스크톱) */}
          <nav className="hidden xl:flex items-center gap-1 bg-neutral-200/50 p-1 rounded-full border border-white/60 shadow-inner">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-neutral-900 shadow-md border border-neutral-200/60 scale-[1.02]'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/40 border border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-emerald-700' : 'text-neutral-500'}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* 우측: 상태 표시 및 모바일 메뉴 버튼 */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-emerald-500/20 text-xs text-neutral-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] font-bold text-emerald-900">System Online</span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-full bg-white/80 hover:bg-white text-neutral-800 border border-neutral-200 shadow-sm transition-all"
              aria-label="메뉴 열기"
            >
              <Icons.Menu />
            </button>
          </div>
        </div>

        {/* 모바일 화면용 드롭다운 메뉴 (글래스모피즘 박스 적용) */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-neutral-200/80 grid grid-cols-2 gap-2 animate-fade-in px-2 pb-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'text-neutral-700 bg-white/70 hover:bg-white border border-neutral-200/60'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-emerald-700'}>{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* 메인 콘텐츠 영역 (화사하고 투명한 글래스모피즘 박스 컨셉 유지) */}
      <main className="relative z-10 max-w-7xl mx-auto">
        <div className="transition-opacity duration-300">
          {renderActiveComponent()}
        </div>
      </main>
    </div>
  );
}