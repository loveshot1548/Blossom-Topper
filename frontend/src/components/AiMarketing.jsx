import React, { useState } from 'react';

export default function AiMarketing() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [aiCaption, setAiCaption] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // 이미지 업로드 시 Gemini AI Vision 분석 및 카드뉴스/캡션 생성 시뮬레이션
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsAnalyzing(true);
      
      // AI 시각 분석 & 캡션 생성 (Gemini API 연동 영역)
      setTimeout(() => {
        setAiCaption(
          `[🌸 Blossom Topper 신작 공개]\n\n공방에서 정성스럽게 제작한 수제 공예품입니다 ✨\n디테일한 마감과 감성적인 오브제로 공간을 특별하게 채워보세요 💕\n\n🏷️ 추천 해시태그:\n#블라썸토퍼 #제스모나이트 #수제오브제 #발포세라믹 #글라스아트 #토퍼제작 #공방일상`
        );
        setIsAnalyzing(false);
      }, 1500);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <span style={styles.badge}>인스타그램 & AI 자동화</span>
        <h1 style={{ fontSize: '2.3rem', fontWeight: '800', margin: '0.6rem 0 0.4rem 0' }}>AI 자동 업로드 & 분석 스튜디오</h1>
        <p style={{ fontSize: '0.95rem', color: '#475569' }}>작품 사진만 넣으면 카드뉴스 레이아웃, 해시태그, 업로드 예약을 AI가 자동으로 처리합니다.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
        {/* 사진 업로드 및 AI 카드뉴스 생성 */}
        <div style={styles.glassCard}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>🖼️ 1. 작품 사진 업로드</h3>
          
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} id="img-upload" />
          <label htmlFor="img-upload" style={styles.uploadBox}>
            {selectedImage ? (
              <img src={selectedImage} alt="Preview" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px' }} />
            ) : (
              <div style={{ textAlign: 'center', color: '#666' }}>
                <span style={{ fontSize: '2rem' }}>📸</span>
                <p style={{ fontSize: '0.8rem', margin: '0.5rem 0 0 0' }}>클릭하여 사진을 드롭하거나 선택하세요</p>
              </div>
            )}
          </label>

          {isAnalyzing && <p style={{ fontSize: '0.8rem', color: '#658354', fontWeight: 'bold' }}>⚡ Gemini AI가 이미지를 분석하는 중...</p>}
        </div>

        {/* AI 자동 작성 캡션 & 카드뉴스 Preview */}
        <div style={styles.glassCard}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>✨ 2. AI 캡션 & 해시태그</h3>
          <textarea
            value={aiCaption}
            onChange={(e) => setAiCaption(e.target.value)}
            placeholder="사진을 등록하면 AI가 인스타 캡션을 자동 작성합니다..."
            style={styles.textArea}
          />
          <button style={styles.actionBtn}>🚀 즉시 인스타그램 업로드</button>
        </div>

        {/* 인스타 실시간 반응 스크래핑/분석 */}
        <div style={styles.glassCard}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 1rem 0' }}>📊 3. 인스타 반응 크롤링</h3>
          <div style={{ background: 'rgba(255,255,255,0.6)', padding: '1rem', borderRadius: '16px', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#666' }}>이번 주 실시간 최고 인기 게시물</span>
            <p style={{ fontSize: '0.85rem', fontWeight: 'bold', margin: '0.3rem 0' }}>[제스모나이트 트레이 신상]</p>
            <div style={{ fontSize: '0.75rem', color: '#2d5a27', fontWeight: 'bold' }}>❤️ 좋아요 142개 · 💬 댓글 28개</div>
          </div>
          <button style={{ ...styles.actionBtn, background: '#333' }}>📅 예약 업로드 시간 설정 (18:00)</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  badge: { fontSize: '0.8rem', fontWeight: '800', color: '#385e2b', background: 'rgba(255,255,255,0.8)', padding: '4px 10px', borderRadius: '8px' },
  glassCard: { background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(20px)', borderRadius: '28px', padding: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.8)' },
  uploadBox: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px', border: '2px dashed #999', borderRadius: '16px', cursor: 'pointer', marginBottom: '1rem' },
  textArea: { width: '100%', height: '150px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.1)', padding: '0.8rem', fontSize: '0.8rem', boxSizing: 'border-box', marginBottom: '0.8rem' },
  actionBtn: { width: '100%', padding: '0.7rem', borderRadius: '14px', border: 'none', background: '#658354', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }
};