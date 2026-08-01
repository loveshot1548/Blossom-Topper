import React from 'react';

export default function YearlyCalendar({ schedule }) {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">연간 기획 캘린더</h1>
        <p className="text-gray-700 mt-2">시즌별 주력 공예품 라인업과 마케팅 일정을 확인하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {schedule.map((item, idx) => (
          <div key={idx} className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90 relative">
            <div className="absolute -top-3 -left-3 bg-gray-900 text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md">
              {item.month}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.event}</h3>
              <div className="text-sm text-gray-600 bg-white/50 p-3 rounded-xl border border-gray-100">
                <span className="font-bold block mb-1">🎯 주력 타겟 품목</span>
                {item.target}
              </div>
            </div>
          </div>
        ))}
        
        {/* 새로운 기획 추가 카드 */}
        <button className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border-2 border-dashed border-gray-300 hover:bg-white/60 transition-all flex flex-col items-center justify-center min-h-[160px]">
          <div className="text-2xl text-gray-400 mb-2">+</div>
          <span className="text-sm font-bold text-gray-500">새 시즌 기획 추가하기</span>
        </button>
      </div>
    </div>
  );
}