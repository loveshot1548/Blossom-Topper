import React, { useState, useEffect } from 'react';

export default function YearlyCalendar() {
  const today = new Date();
  
  const [memos, setMemos] = useState(() => {
    const saved = localStorage.getItem('calendar_memos');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('calendar_memos', JSON.stringify(memos));
  }, [memos]);

  const handleMemoChange = (monthId, value) => {
    setMemos(prev => ({ ...prev, [monthId]: value }));
  };

  const calculateDDay = (targetDateStr) => {
    const targetDate = new Date(targetDateStr);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'D-Day';
    if (diffDays > 0) return `D-${diffDays}`;
    return `D+${Math.abs(diffDays)} (종료)`;
  };

  const yearlyData = [
    { id: 'm1', month: '1월', date: '2026-01-01', event: '새해/설날 준비', strategy: '제스모나이트 목표 달성 트레이, 새해 다짐 슈링클스 키링 원데이 클래스 오픈', keywords: '#새해선물 #설날용돈토퍼' },
    { id: 'm2', month: '2월', date: '2026-02-14', event: '졸업식 & 발렌타인데이', strategy: '꽃다발용 페이퍼 토퍼 집중 홍보, 커플 대상 슈링클스 키링 제작 클래스', keywords: '#졸업식토퍼 #발렌타인공방데이트' },
    { id: 'm3', month: '3월', date: '2026-03-14', event: '화이트데이 & 봄 시즌 시작', strategy: '봄맞이 플랜테리어를 위한 발포세라믹 화분 클래스, 사탕 바구니용 미니 토퍼', keywords: '#봄인테리어 #발포세라믹' },
    { id: 'm4', month: '4월', date: '2026-04-05', event: '벚꽃/피크닉 & 중간고사', strategy: '피크닉 도시락용 레터링 토퍼, 학생 응원용 슈링클스 북마크 기획전', keywords: '#피크닉소품 #응원선물' },
    { id: 'm5', month: '5월', date: '2026-05-08', event: '가정의 달 (어버이날/스승의날)', strategy: '용돈박스 토퍼 세트 완판 목표, 카네이션 모티브 제스모나이트 방향제', keywords: '#어버이날토퍼 #카네이션선물' },
    { id: 'm6', month: '6월', date: '2026-06-01', event: '초여름 인테리어 변경', strategy: '쿨톤 마블링 제스모나이트 트레이 프로모션, 여름맞이 유리공예 느낌 슈링클스', keywords: '#여름인테리어 #제스모나이트트레이' },
    { id: 'm7', month: '7월', date: '2026-07-20', event: '여름방학 & 휴가철', strategy: '키즈 원데이 클래스(안전한 제스모나이트/페이퍼아트) 모객 집중, 휴가용 포토 토퍼', keywords: '#키즈원데이클래스 #여행토퍼' },
    { id: 'm8', month: '8월', date: '2026-08-15', event: '광복절 & 2학기 준비', strategy: '데스크테리어(책상 꾸미기)용 발포세라믹 연필꽂이 제작 클래스, 하반기 기업 출강 제안', keywords: '#데스크테리어 #기업출강' },
    { id: 'm9', month: '9월', date: '2026-09-25', event: '추석 명절', strategy: '전통 문양 제스모나이트 코스터 세트, 추석 용돈 봉투 토퍼 한정 판매', keywords: '#추석선물세트 #명절토퍼' },
    { id: 'm10', month: '10월', date: '2026-10-31', event: '할로윈 & 가을 캠핑', strategy: '할로윈 테마 슈링클스 파츠 만들기, 캠핑 감성 발포세라믹 랜턴 받침대', keywords: '#할로윈소품 #캠핑토퍼' },
    { id: 'm11', month: '11월', date: '2026-11-12', event: '수능 & 빼빼로데이', strategy: '수능 대박 기원 행운의 키링, 빼빼로 포장용 미니 레터링 토퍼', keywords: '#수능응원선물 #빼빼로데이토퍼' },
    { id: 'm12', month: '12월', date: '2026-12-25', event: '크리스마스 & 연말 파티', strategy: '홈파티용 케이크 토퍼, 크리스마스 오너먼트(제스모나이트/슈링클스) 클래스', keywords: '#크리스마스오너먼트 #연말파티토퍼' },
  ];

  return (
    <div className="animate-fade-in space-y-6 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">연간 기획 캘린더</h1>
          <p className="text-sm sm:text-base text-gray-700 mt-2">시즌별 마케팅 전략과 이벤트 일정을 관리하세요.</p>
        </div>
        <div className="bg-green-800 text-white px-4 sm:px-5 py-2.5 rounded-2xl shadow-md font-bold text-xs sm:text-sm shrink-0">
          오늘: {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-h-[75vh] overflow-y-auto custom-scrollbar pr-1 sm:pr-2">
        {yearlyData.map((item) => {
          const dDayStr = calculateDDay(item.date);
          const isPassed = dDayStr.includes('종료');
          
          return (
            <div key={item.id} className={`bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border ${isPassed ? 'border-gray-200 opacity-60' : 'border-green-800/20 shadow-sm'} flex flex-col transition-all hover:shadow-md`}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">{item.month}</h2>
                <span className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold ${isPassed ? 'bg-gray-100 text-gray-500' : 'bg-red-100 text-red-600'}`}>
                  {dDayStr}
                </span>
              </div>
              
              <div className="space-y-3 flex-grow">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-green-800 bg-green-100 px-2 py-1 rounded-md">핵심 이슈</span>
                  <p className="text-xs sm:text-sm text-gray-900 font-bold mt-1.5 break-words">{item.event} <span className="text-xs font-normal text-gray-500">({item.date})</span></p>
                </div>
                
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-blue-800 bg-blue-100 px-2 py-1 rounded-md">콘텐츠 & 상품 전략</span>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1.5 leading-relaxed break-words">{item.strategy}</p>
                </div>

                <div>
                  <p className="text-[11px] sm:text-xs font-medium text-gray-500 mt-2 break-words">{item.keywords}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <textarea
                  className="w-full text-xs sm:text-sm bg-gray-50/50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-800 resize-none placeholder-gray-400"
                  rows="3"
                  placeholder={`${item.month}의 내 작업 목표나 아이디어를 기록하세요...`}
                  value={memos[item.id] || ''}
                  onChange={(e) => handleMemoChange(item.id, e.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}