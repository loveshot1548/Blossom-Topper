import React, { useState } from 'react';

export default function SocialMonitor() {
  const [activeTab, setActiveTab] = useState('instagram');

  // 실시간 모니터링 데이터 (공식 API 및 Webhook 연동 시뮬레이션)
  const [instaData] = useState({
    status: 'connected',
    lastSync: '방금 전 (Webhook 실시간 수신)',
    metrics: { followers: '3,420', reach: '18,500', engagementRate: '5.4%' },
    recentActivity: [
      { id: 1, type: 'comment', user: 'min_ji_99', content: '제스모나이트 트레이 클래스 주말에도 하나요?', time: '3분 전', status: '답변 대기' },
      { id: 2, type: 'mention', user: 'craft_lover', content: '블로섬토퍼 소품 너무 예쁘게 잘 받았습니다! 🤎', time: '15분 전', status: '확인 완료' },
      { id: 3, type: 'like', user: 'jisu_home', content: '피드 게시글에 좋아요를 눌렀습니다.', time: '28분 전', status: '동기화됨' }
    ]
  });

  const [blogData] = useState({
    status: 'connected',
    lastSync: '1분 전 (RSS 및 API 피드)',
    metrics: { dailyVisitors: '1,240', totalPosts: '312', searchRankTop3: '14개' },
    recentActivity: [
      { id: 1, type: 'comment', user: '이웃님', content: '발포세라믹 화분 원데이 후기 잘 읽고 갑니다~', time: '7분 전', status: '답변 대기' },
      { id: 2, type: 'post', user: '블로그 발행', content: '[여름 인테리어] 제스모나이트 트레이 제작 일지', time: '2시간 전', status: '노출 정상' },
      { id: 3, type: 'search', user: '키워드 유입', content: '"김포 공방 데이트" 검색 유입 급증 (+140%)', time: '1시간 전', status: '트렌드 상승' }
    ]
  });

  return (
    <div className="animate-fade-in space-y-6 px-2 sm:px-0 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">OFFICIAL API MONITORING</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">소셜 실시간 모니터링</h1>
          <p className="text-sm sm:text-base text-gray-700 mt-1">인스타그램 Graph API 및 네이버 블로그 피드를 연동하여 실시간 지표와 반응을 안전하게 모니터링합니다.</p>
        </div>
        <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-green-800/20 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold text-gray-800">API 연동 정상 작동 중</span>
        </div>
      </div>

      {/* 탭 전환 버튼 */}
      <div className="flex gap-2 border-b border-gray-200 pb-3">
        <button
          onClick={() => setActiveTab('instagram')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'instagram'
              ? 'bg-green-800 text-white shadow-md'
              : 'bg-white/70 text-gray-600 hover:bg-white border border-gray-200'
          }`}
        >
          📷 인스타그램 모니터링
        </button>
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'blog'
              ? 'bg-green-800 text-white shadow-md'
              : 'bg-white/70 text-gray-600 hover:bg-white border border-gray-200'
          }`}
        >
          ✍️ 네이버 블로그 모니터링
        </button>
      </div>

      {/* 인스타그램 탭 콘텐츠 */}
      {activeTab === 'instagram' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-green-800/20 shadow-sm">
              <span className="text-xs font-bold text-gray-500">실시간 팔로워</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">{instaData.metrics.followers}</p>
              <span className="text-[11px] text-green-600 font-bold mt-1 inline-block">▲ 전주 대비 +38명</span>
            </div>
            <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-green-800/20 shadow-sm">
              <span className="text-xs font-bold text-gray-500">주간 도달(Reach)</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">{instaData.metrics.reach}</p>
              <span className="text-[11px] text-green-600 font-bold mt-1 inline-block">▲ 피드 노출 최적화 중</span>
            </div>
            <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-green-800/20 shadow-sm">
              <span className="text-xs font-bold text-gray-500">참여율 (Engagement)</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">{instaData.metrics.engagementRate}</p>
              <span className="text-[11px] text-blue-600 font-bold mt-1 inline-block">● 업계 평균 상회</span>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-xl p-6 rounded-3xl border border-green-800/20 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-gray-900">💬 인스타그램 실시간 피드백 및 댓글 알림</h3>
              <span className="text-xs text-gray-500">동기화: {instaData.lastSync}</span>
            </div>
            <div className="space-y-3">
              {instaData.recentActivity.map((item) => (
                <div key={item.id} className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-green-800 bg-green-100 px-2 py-0.5 rounded-md">{item.type}</span>
                      <span className="text-sm font-bold text-gray-900">@{item.user}</span>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1.5 break-words">{item.content}</p>
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-xl shrink-0 ${
                    item.status === '답변 대기' ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 블로그 탭 콘텐츠 */}
      {activeTab === 'blog' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-green-800/20 shadow-sm">
              <span className="text-xs font-bold text-gray-500">오늘 예상 방문자</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">{blogData.metrics.dailyVisitors}</p>
              <span className="text-[11px] text-green-600 font-bold mt-1 inline-block">▲ 검색 유입 활성화</span>
            </div>
            <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-green-800/20 shadow-sm">
              <span className="text-xs font-bold text-gray-500">누적 포스팅</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">{blogData.metrics.totalPosts}</p>
              <span className="text-[11px] text-gray-600 font-bold mt-1 inline-block">정기 발행 중</span>
            </div>
            <div className="bg-white/85 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-green-800/20 shadow-sm">
              <span className="text-xs font-bold text-gray-500">상위 노출 키워드</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">{blogData.metrics.searchRankTop3}</p>
              <span className="text-[11px] text-blue-600 font-bold mt-1 inline-block">● 스마트에디터 연동</span>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-xl p-6 rounded-3xl border border-green-800/20 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-gray-900">✍️ 네이버 블로그 실시간 활동 및 반응</h3>
              <span className="text-xs text-gray-500">동기화: {blogData.lastSync}</span>
            </div>
            <div className="space-y-3">
              {blogData.recentActivity.map((item) => (
                <div key={item.id} className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md">{item.type}</span>
                      <span className="text-sm font-bold text-gray-900">{item.user}</span>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1.5 break-words">{item.content}</p>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1.5 rounded-xl shrink-0 bg-gray-200 text-gray-700">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}