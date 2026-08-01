import React from 'react';

export default function IntegrationHub({ integrations }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-700';
      case 'idle': return 'bg-gray-100 text-gray-600';
      case 'error': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="animate-fade-in space-y-6 px-2 sm:px-0">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">연동 허브</h1>
        <p className="text-sm sm:text-base text-gray-700 mt-2">사내 파이프라인 및 외부 디자인/DB 툴의 네트워크 상태를 모니터링합니다.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((item, idx) => (
          <div key={idx} className="bg-white/70 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 shadow-sm border border-white/90 flex flex-col justify-between min-h-[13rem]">
            <div>
              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="text-sm font-bold text-gray-900 break-words">{item.name}</h3>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase shrink-0 ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-4">최근 동기화: {item.lastSync}</p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200/50 flex justify-between items-center">
              <span className="text-xs font-medium text-gray-600">지연율 (Latency)</span>
              <span className="text-sm font-bold text-gray-900">{item.latency}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 shadow-sm border border-white/90 flex gap-4 overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-3 bg-white/50 px-4 py-2.5 rounded-xl border border-gray-100 shrink-0">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs sm:text-sm font-bold text-gray-800">Figma Assets Sync</span>
        </div>
        <div className="flex items-center gap-3 bg-white/50 px-4 py-2.5 rounded-xl border border-gray-100 shrink-0">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs sm:text-sm font-bold text-gray-800">Canva Template API</span>
        </div>
        <div className="flex items-center gap-3 bg-white/50 px-4 py-2.5 rounded-xl border border-gray-100 shrink-0">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs sm:text-sm font-bold text-gray-800">Notion DB Routing</span>
        </div>
      </div>
    </div>
  );
}