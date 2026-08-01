import React, { useState, useEffect } from 'react';

// 🚀 1. 생성하신 6개의 모듈 컴포넌트 불러오기 (같은 폴더에 있다고 가정)
import HomeDashboard from './HomeDashboard';
import ContentStudio from './ContentStudio';
import AiMarketing from './AiMarketing';
import IntegrationHub from './IntegrationHub';
import WeeklyReport from './WeeklyReport';
import YearlyCalendar from './YearlyCalendar';

// 상단 네비게이션 아이콘 세트
const Icons = {
  Leaf: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  Home: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Studio: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
  Marketing: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Hub: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>,
  Report: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  Calendar: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
};

export default function App() {
  const [activeTab, setActiveTab] = useState('HomeDashboard');

  // 🚀 2. 글로벌 확장 데이터 세팅 (자식 컴포넌트들에게 Props로 내려줄 데이터)
  
  // [데이터 1] 실시간 트래픽 (HomeDashboard 용)
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

  // [데이터 2] 확장된 공예 제품 주간 판매/클래스 현황 (WeeklyReport 용)
  const weeklyData = [
    { craft: '슈링클스 키링', type: '주문제작', count: 42, revenue: '630,000', trend: 'up' },
    { craft: '발포세라믹 화분', type: '원데이클래스', count: 18, revenue: '900,000', trend: 'up' },
    { craft: '제스모나이트 트레이', type: '주문제작', count: 55, revenue: '1,100,000', trend: 'stable' },
    { craft: '페이퍼 아트 토퍼', type: '주문제작', count: 89, revenue: '890,000', trend: 'up' }
  ];

  // [데이터 3] 연간 주요 시즌 일정 (YearlyCalendar 용)
  const yearlySchedule = [
    { month: '4월-5월', event: '가정의 달 피크', target: '페이퍼 토퍼, 슈링클스 키링 세트' },
    { month: '7월-8월', event: '여름 인테리어 기획전', target: '제스모나이트 마블링 트레이' },
    { month: '9월-10월', event: '가을 업사이클링 클래스', target: '발포세라믹 오브제 제작' }
  ];

  // [데이터 4] 시스템 연동 상태 (IntegrationHub 용)
  const integrations = [
    { name: 'n8n Workflow', status: 'connected', latency: '42ms', lastSync: '방금 전' },
    { name: 'Python Data Scraper', status: 'connected', latency: '120ms', lastSync: '1시간 전' },
    { name: 'Canva Design API', status: 'idle', latency: '-', lastSync: '어제' },
    { name: 'Notion Database', status: 'connected', latency: '85ms', lastSync: '10분 전' }
  ];

  // 🚀 3. 탭 메뉴 구성 배열
  const tabs = [
    { id: 'HomeDashboard', label: '홈', icon: <Icons.Home /> },
    { id: 'ContentStudio', label: '콘텐츠 스튜디오', icon: <Icons.Studio /> },
    { id: 'AiMarketing', label: 'AI 마케팅', icon: <Icons.Marketing /> },
    { id: 'IntegrationHub', label: '연동 허브', icon: <Icons.Hub /> },
    { id: 'WeeklyReport', label: '주간 리포트', icon: <Icons.Report /> },
    { id: 'YearlyCalendar', label: '연간 일정', icon: <Icons.Calendar /> }
  ];

  // 🚀 4. 활성화된 탭에 따라 컴포넌트 렌더링
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'HomeDashboard':
        return <HomeDashboard traffic={traffic} />;
      case 'ContentStudio':
        return <ContentStudio />;
      case 'AiMarketing':
        return <AiMarketing />;
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
    <div className="min-h-screen relative font-sans text-gray-900 p-4 md:p-8 box-border"
         style={{ 
           backgroundImage: 'url("https://images.unsplash.com/photo-1536657464919-892534f60d6e?q=80&w=2574&auto=format&fit=crop")',
           backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
         }}>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-green-50/90 backdrop-blur-md pointer-events-none z-0"></div>

      {/* 헤더 및 네비게이션 */}
      <header className="relative z-10 flex flex-col xl:flex-row justify-between items-center max-w-7xl mx-auto mb-8 gap-4">
        <div className="flex items-center gap-2 font-extrabold text-2xl">
          <span className="text-green-800"><Icons.Leaf /></span>
          <span className="tracking-tight text-gray-900">Blossom Topper</span>
          <span className="ml-2 text-xs font-medium bg-black text-white px-2 py-1 rounded-md">Control Center</span>
        </div>

        {/* 모듈화된 탭 네비게이션 */}
        <nav className="flex overflow-x-auto justify-start xl:justify-center gap-2 bg-white/60 backdrop-blur-xl p-1.5 rounded-full shadow-sm border border-white/90 max-w-full">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all shrink-0 ${
                activeTab === tab.id ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              <span className="flex items-center justify-center">{tab.icon}</span>
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* 선택된 모듈 컴포넌트가 주입되는 영역 */}
      <main className="relative z-10 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          {renderActiveComponent()}
        </div>
      </main>
    </div>
  );
}