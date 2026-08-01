import React, { useState } from 'react';

export default function ContentStudio() {
  const [uploadState, setUploadState] = useState('idle');

  const handleSimulatedUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadState('uploading');
    setTimeout(() => {
      setUploadState('ai_processing');
      setTimeout(() => {
        setUploadState('done');
        setTimeout(() => setUploadState('idle'), 4000);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">콘텐츠 스튜디오</h1>
        <p className="text-gray-700 mt-2">작업물을 업로드하면 AI가 멀티채널에 맞게 가공 및 배포합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
          <h3 className="text-lg font-bold mb-6 text-gray-900">1. 원본 수집</h3>
          <label className={`flex flex-col justify-center items-center h-48 border-2 border-dashed rounded-2xl transition-all cursor-pointer
            ${uploadState === 'idle' ? 'border-green-800/40 bg-white/40 hover:bg-white/60' : ''}
            ${uploadState === 'uploading' ? 'border-blue-500 bg-blue-50/50' : ''}
            ${uploadState === 'ai_processing' ? 'border-purple-500 bg-purple-50/50' : ''}
            ${uploadState === 'done' ? 'border-green-500 bg-green-50/50' : ''}
          `}>
            <input type="file" className="hidden" accept="image/*,video/*" onChange={handleSimulatedUpload} disabled={uploadState !== 'idle'} />
            {uploadState === 'idle' && <span className="text-sm text-gray-700 font-medium">클릭하여 미디어 업로드</span>}
            {uploadState === 'uploading' && <span className="text-sm font-bold text-blue-600 animate-pulse">📤 전송 중...</span>}
            {uploadState === 'ai_processing' && <span className="text-sm font-bold text-purple-600 animate-pulse">🤖 AI 스크립트 작성 중...</span>}
            {uploadState === 'done' && <span className="text-sm font-bold text-green-700">✨ 미디어 처리 완료!</span>}
          </label>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-sm border border-white/90">
          <h3 className="text-lg font-bold mb-6 text-gray-900">2. 배포 현황</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-black/5">
              <div>
                <div className="text-sm font-bold text-gray-900">Instagram 릴스</div>
                <div className="text-xs text-gray-600 mt-1">[신상] 슈링클스 키링 세트</div>
              </div>
              <button className="bg-green-800 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-green-900">즉시 발행</button>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-black/5">
              <div>
                <div className="text-sm font-bold text-gray-900">Naver Blog</div>
                <div className="text-xs text-gray-600 mt-1">
                  {uploadState === 'ai_processing' ? 'SEO 최적화 진행 중...' : '원고 대기 중'}
                </div>
              </div>
              <span className={`text-xs px-3 py-1.5 rounded-xl font-bold ${uploadState === 'ai_processing' ? 'bg-purple-100 text-purple-700' : 'bg-black/5 text-gray-500'}`}>
                {uploadState === 'ai_processing' ? '작성 중' : '대기'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}