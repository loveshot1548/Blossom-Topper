import React from 'react';

export default function WeeklyReport({ weeklyData }) {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">주간 리포트</h1>
        <p className="text-gray-700 mt-2">품목별 판매 및 클래스 전환율을 실시간으로 집계합니다.</p>
      </div>

      <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200/50">
                <th className="p-4 text-sm font-bold text-gray-600">품목명</th>
                <th className="p-4 text-sm font-bold text-gray-600">유형</th>
                <th className="p-4 text-sm font-bold text-gray-600">판매/예약(건)</th>
                <th className="p-4 text-sm font-bold text-gray-600">예상 매출(원)</th>
                <th className="p-4 text-sm font-bold text-gray-600">트렌드</th>
              </tr>
            </thead>
            <tbody>
              {weeklyData.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-white/40 transition-colors">
                  <td className="p-4 text-sm font-bold text-gray-900">{item.craft}</td>
                  <td className="p-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{item.type}</span>
                  </td>
                  <td className="p-4 text-sm text-gray-800">{item.count}</td>
                  <td className="p-4 text-sm font-bold text-green-800">{item.revenue}</td>
                  <td className="p-4">
                    {item.trend === 'up' ? (
                      <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md">상승 ⬆</span>
                    ) : (
                      <span className="text-xs font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-md">유지 -</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}