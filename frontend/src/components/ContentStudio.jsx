import React, { useState } from 'react';

// 고급스러운 미니멀 SVG 아이콘 세트
const Icons = {
  Upload: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Sparkles: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
};

export default function ContentStudio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // 1. 파일 업로드 및 Base64 변환 (AI가 읽을 수 있는 형태로 변환)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        // 'data:image/jpeg;base64,' 부분을 제외한 순수 데이터만 추출
        const base64Data = reader.result.split(',')[1];
        setImageBase64(base64Data);
        setGeneratedCaption(''); // 새 이미지 업로드 시 기존 캡션 초기화
      };
      reader.readAsDataURL(file);
    }
  };

  // 2. Gemini 1.5 Flash API 호출 로직
  const handleGenerateAI = async () => {
    if (!imageBase64) {
      alert('먼저 작품 사진을 업로드해주세요!');
      return;
    }

    setIsGenerating(true);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // 공방에 최적화된 프롬프트 세팅
    const promptText = `
      당신은 핸드메이드 공방 'Blossom Topper'의 전문 SNS 마케터입니다. 
      첨부된 사진(토퍼, 제스모나이트, 글라스아트, 발포세라믹 등)을 분석하여 인스타그램 카드뉴스에 어울리는 감성적인 캡션을 작성해주세요.
      시각적인 디테일, 수제작의 정성, 선물하기 좋은 점을 자연스럽게 녹여내고, 
      마지막에는 띄어쓰기 없이 작성된 트렌디한 해시태그 5~7개를 추가해주세요.
    `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: promptText },
                  {
                    inline_data: {
                      mime_type: 'image/jpeg',
                      data: imageBase64,
                    },
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
        setGeneratedCaption(data.candidates[0].content.parts[0].text);
      } else {
        setGeneratedCaption('캡션 생성에 실패했습니다. 다시 시도해 주세요.');
      }
    } catch (error) {
      console.error('API 호출 에러:', error);
      setGeneratedCaption('오류가 발생했습니다. API 키와 네트워크 상태를 확인하세요.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fade-in">
      <div style={styles.heroSection}>
        <span style={styles.badge}>Automated Publishing</span>
        <h1 style={styles.heroTitle}>AI 미디어 제작 및 자동 배포</h1>
        <p style={styles.heroSubtitle}>작품 사진을 업로드하면 AI가 이미지를 분석하여 완벽한 인스타그램 캡션을 즉시 작성합니다.</p>
      </div>
      
      <div style={styles.gridContainer}>
        
        {/* 왼쪽: 사진 업로드 영역 */}
        <div style={styles.glassCard}>
          <h3 style={styles.cardTitle}>1. 원본 미디어 수집</h3>
          
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            style={{ display: 'none' }} 
            id="image-upload" 
          />
          <label htmlFor="image-upload" style={styles.uploadBox}>
            {selectedImage ? (
              <img src={selectedImage} alt="Uploaded Artwork" style={styles.previewImage} />
            ) : (
              <div style={styles.uploadPlaceholder}>
                <div style={{ color: '#666', marginBottom: '1rem' }}><Icons.Upload /></div>
                <span style={{ fontSize: '0.9rem', color: '#444', fontWeight: '500' }}>작품 사진 클릭 또는 드래그 앤 드롭</span>
                <span style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.5rem' }}>JPG, PNG 등 고화질 이미지 권장</span>
              </div>
            )}
          </label>
        </div>

        {/* 오른쪽: AI 캡션 생성 영역 */}
        <div style={styles.glassCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ ...styles.cardTitle, margin: 0 }}>2. AI 인스타 캡션 자동 생성</h3>
            <button 
              onClick={handleGenerateAI} 
              disabled={isGenerating || !selectedImage}
              style={{
                ...styles.generateBtn,
                opacity: (isGenerating || !selectedImage) ? 0.6 : 1,
                cursor: (isGenerating || !selectedImage) ? 'not-allowed' : 'pointer'
              }}
            >
              <Icons.Sparkles /> {isGenerating ? 'AI가 분석 중...' : '캡션 생성하기'}
            </button>
          </div>
          
          <textarea
            value={generatedCaption}
            onChange={(e) => setGeneratedCaption(e.target.value)}
            placeholder={selectedImage ? "버튼을 누르면 AI가 작품을 분석하여 캡션을 작성합니다..." : "먼저 왼쪽에서 사진을 업로드해 주세요."}
            style={styles.textArea}
          />
          
          {generatedCaption && (
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(generatedCaption)}>
              📋 클립보드에 복사하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroSection: { marginBottom: '3rem' },
  badge: { fontSize: '0.75rem', fontWeight: '700', color: '#2d5a27', background: 'rgba(255,255,255,0.9)', padding: '6px 12px', borderRadius: '12px', textTransform: 'uppercase' },
  heroTitle: { fontSize: '2.4rem', fontWeight: '800', margin: '1rem 0', color: '#1a1a1a', letterSpacing: '-1px' },
  heroSubtitle: { fontSize: '0.95rem', color: '#444', margin: 0, fontWeight: '400', lineHeight: '1.6', maxWidth: '800px' },
  gridContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(24px)', borderRadius: '24px', padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)', border: '1px solid rgba(255, 255, 255, 0.9)',
  },
  cardTitle: { fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1.5rem 0', color: '#1a1a1a' },
  uploadBox: {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '280px',
    border: '2px dashed rgba(45, 90, 39, 0.4)', borderRadius: '16px', background: 'rgba(255,255,255,0.4)', cursor: 'pointer', overflow: 'hidden', transition: 'all 0.3s'
  },
  uploadPlaceholder: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  previewImage: { width: '100%', height: '100%', objectFit: 'cover' },
  generateBtn: {
    display: 'flex', alignItems: 'center', gap: '6px', background: '#2d5a27', color: '#fff', border: 'none', 
    padding: '10px 16px', borderRadius: '14px', fontSize: '0.85rem', fontWeight: '600', transition: 'all 0.2s'
  },
  textArea: {
    width: '100%', height: '220px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.1)',
    background: 'rgba(255,255,255,0.7)', padding: '1.2rem', fontSize: '0.9rem', color: '#333',
    lineHeight: '1.6', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit'
  },
  copyBtn: {
    width: '100%', marginTop: '1rem', background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(45, 90, 39, 0.3)',
    color: '#2d5a27', padding: '12px', borderRadius: '14px', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer'
  }
};