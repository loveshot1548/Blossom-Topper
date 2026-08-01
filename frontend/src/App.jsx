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
  Hexagon: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
  Home: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  Monitor: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  Studio: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  Marketing: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>,
  Hub: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  Report: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Activity: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
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
    { craft: '슈링클스 키링', type: '주문제작', count: 42, revenue: '630,000', trend: 'up' },
    { craft: '발포세라믹 화분', type: '원데이클래스', count: 18, revenue: '900,000', trend: 'up' },
    { craft: '제스모나이트 트레이', type: '주문제작', count: 55, revenue: '1,100,000', trend: 'stable' },
    { craft: '페이퍼 아트 토퍼', type: '주문제작', count: 89, revenue: '890,000', trend: 'up' }
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
    { id: 'WeeklyReport', label: '주간 리포트', icon: <Icons.Report /> },
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-neutral-800 selection:text-white">
      <div className="w-full h-px bg-neutral-800/80"></div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/75 border-b border-neutral-800/60 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          
          {/* Left: Logo & Brand */}
          <div className="flex items-center gap-3 justify-start">
            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200">
              <Icons.Hexagon />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-neutral-100">Blossom Topper</span>
                <span className="text-[10px] font-mono tracking-wider bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded border border-neutral-700/50">v2.6</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-mono">Control Center</p>
            </div>
          </div>

          {/* Center: Navigation Tabs */}
          <nav className="hidden xl:flex items-center justify-center gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 justify-self-center">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-neutral-800 text-neutral-100 shadow-sm border border-neutral-700/60'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 border border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-neutral-100' : 'text-neutral-400'}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Utility & Status Actions */}
          <div className="flex items-center justify-end gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px]">System Online</span>
            </div>

            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded-lg text-xs font-medium border border-neutral-800 transition-colors"
              >
                {isMobileMenuOpen ? '닫기 ✕' : '메뉴 ☰'}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-1.5 animate-fade-in">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-neutral-800 text-neutral-100 border border-neutral-700/60'
                      : 'text-neutral-400 bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/50'
                  }`}
                >
                  <span className={isActive ? 'text-neutral-100' : 'text-neutral-400'}>{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="transition-opacity duration-200">
          {renderActiveComponent()}
        </div>
      </main>
    </div>
  );
}