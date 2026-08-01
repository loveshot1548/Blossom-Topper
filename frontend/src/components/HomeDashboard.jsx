import React from 'react';

export default function HomeDashboard({ traffic }) {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Blossom Topper 관제탑</h1>
        <p className="text-gray-700 mt-2">오늘의 주요 지표와 시스템 상태를 한눈에 확인하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 트래픽 카드 */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90 relative overflow-hidden">
          <div className="absolute top-6 right-6 flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Live</span>
          </div>
          <h3 className="text-lg font-bold mb-4 text-gray-900">블로그 유입</h3>
          <strong className="text-4xl font-light text-gray-900 transition-all duration-300">{traffic.blog.toLocaleString()}</strong>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90 relative overflow-hidden">
          <h3 className="text-lg font-bold mb-4 text-gray-900">인스타 클릭</h3>
          <strong className="text-4xl font-light text-gray-900 transition-all duration-300">{traffic.insta.toLocaleString()}</strong>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90 relative overflow-hidden">
          <h3 className="text-lg font-bold mb-4 text-gray-900">스토어 방문</h3>
          <strong className="text-4xl font-light text-gray-900 transition-all duration-300">{traffic.store.toLocaleString()}</strong>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90 mt-6">
        <h3 className="text-lg font-bold mb-4 text-gray-900">🔔 실시간 긴급 알림</h3>
        <div className="p-4 bg-white/60 rounded-2xl border border-red-100 flex justify-between items-center">
          <div>
            <span className="text-sm font-bold text-gray-900">카카오채널 문의 (s**_k)</span>
            <p className="text-xs text-gray-600 mt-1">"이번 주말 행사인데 맞춤 토퍼 급행 제작 가능한가요?"</p>
          </div>
          <span className="text-[10px] bg-red-100 text-red-700 px-3 py-1.5 rounded-xl font-bold animate-pulse">응답 대기 중</span>
        </div>
      </div>
    </div>
  );
}