import React, { useState } from 'react';

// 고급스러운 미니멀 SVG 아이콘 세트
const Icons = {
  Leaf: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  PlaySquare: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
  Upload: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Users: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Target: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  TrendingUp: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Hash: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>
};

export default function App() {
  const [activeTab, setActiveTab] = useState('콘텐츠 스튜디오');

  return (
    <div style={styles.container}>
      <div style={styles.bgOverlay}></div>

      {/* 헤더 네비게이션 */}
      <header style={styles.topHeader}>
        <div style={styles.logoArea}>
          <span style={{ color: '#2d5a27' }}><Icons.Leaf /></span>
          <span style={styles.logoText}>Blossom Topper</span>
        </div>

        <nav style={styles.navCapsule}>
          <button onClick={() => setActiveTab('콘텐츠 스튜디오')} style={{ ...styles.navBtn, ...(activeTab === '콘텐츠 스튜디오' ? styles.activeNavBtn : {}) }}>
            <span style={styles.iconWrapper}><Icons.PlaySquare /></span> 미디어 & 퍼블리싱
          </button>
          <button onClick={() => setActiveTab('트래픽 & 리드')} style={{ ...styles.navBtn, ...(activeTab === '트래픽 & 리드' ? styles.activeNavBtn : {}) }}>
            <span style={styles.iconWrapper}><Icons.Users /></span> 고객 & 리드 제어
          </button>
          <button onClick={() => setActiveTab('인사이트 랩')} style={{ ...styles.navBtn, ...(activeTab === '인사이트 랩' ? styles.activeNavBtn : {}) }}>
            <span style={styles.iconWrapper}><Icons.TrendingUp /></span> 분석 & 트렌드
          </button>
        </nav>
      </header>

      <main style={styles.mainWrapper}>
        
        {/* 1️⃣ 탭: 홍보물 제작 & 게시물 업로드 (요구사항 1, 2) */}
        {activeTab === '콘텐츠 스튜디오' && (
          <div className="fade-in">
            <div style={styles.heroSection}>
              <span style={styles.badge}>Automated Publishing</span>
              <h1 style={styles.heroTitle}>AI 미디어 제작 및 자동 배포</h1>
              <p style={styles.heroSubtitle}>촬영한 원본 미디어를 업로드하면 Google AI가 카드뉴스와 영상을 자동 편집하여 인스타그램과 블로그에 동시 발행합니다.</p>
            </div>
            
            <div style={styles.gridContainer}>
              <div style={styles.glassCard}>
                <h3 style={styles.cardTitle}><span style={{marginRight:'8px'}}><Icons.Upload /></span> 1. 원본 미디어 수집</h3>
                <div style={styles.uploadBox}>
                  <div style={{ color: '#666', marginBottom: '1rem' }}><Icons.PlaySquare /></div>
                  <span style={{ fontSize: '0.9rem', color: '#444' }}>제스모나이트 또는 토퍼 원본 사진/영상 드롭</span>
                  <span style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.5rem' }}>자동 보정 및 릴스(Reels) 포맷 변환 대기</span>
                </div>
              </div>

              <div style={styles.glassCard}>
                <h3 style={styles.cardTitle}><span style={{marginRight:'8px'}}><Icons.PlaySquare /></span> 2. 멀티채널 자동 업로드 대기열</h3>
                <div style={styles.listGroup}>
                  <div style={styles.listItem}>
                    <div>
                      <div style={styles.itemLabel}>Instagram 피드 & 릴스</div>
                      <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '4px' }}>[신상] 글라스아트 썬캐처 리뷰 (생성 완료)</div>
                    </div>
                    <button style={styles.actionBtn}>즉시 발행</button>
                  </div>
                  <div style={styles.listItem}>
                    <div>
                      <div style={styles.itemLabel}>Naver Blog 포스팅</div>
                      <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '4px' }}>SEO 최적화 원고 생성 중...</div>
                    </div>
                    <span style={styles.statusProcessing}>AI 작성 중</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2️⃣ 탭: 방문객 관리 & 잠재고객 캐치 (요구사항 3, 6) */}
        {activeTab === '트래픽 & 리드' && (
          <div className="fade-in">
            <div style={styles.heroSection}>
              <span style={styles.badge}>Lead Generation & CRM</span>
              <h1 style={styles.heroTitle}>스마트 트래픽 및 리드 제어</h1>
              <p style={styles.heroSubtitle}>유입된 방문객의 행동 패턴을 분석하고, 구매 전환 확률이 높은 잠재 고객(Lead)을 자동으로 분류하여 알림을 보냅니다.</p>
            </div>

            <div style={styles.gridContainer}>
              <div style={styles.glassCard}>
                <h3 style={styles.cardTitle}><span style={{marginRight:'8px'}}><Icons.Users /></span> 실시간 방문객 트래픽</h3>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <div style={styles.statBox}>
                    <span style={styles.statLabel}>금일 블로그 유입</span>
                    <strong style={styles.statValue}>342</strong>
                  </div>
                  <div style={styles.statBox}>
                    <span style={styles.statLabel}>인스타 프로필 클릭</span>
                    <strong style={styles.statValue}>89</strong>
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#555', lineHeight: '1.6' }}>
                  최근 유입의 45%가 <b>'발포세라믹 화분'</b> 관련 키워드를 통해 발생했습니다. 관련 폼(Form) 스위치 노드 활성화가 권장됩니다.
                </div>
              </div>

              <div style={styles.glassCard}>
                <h3 style={styles.cardTitle}><span style={{marginRight:'8px'}}><Icons.Target /></span> AI 잠재고객(Lead) 캐치</h3>
                <div style={styles.listGroup}>
                  <div style={styles.leadItem}>
                    <div style={styles.leadHeader}>
                      <span style={styles.itemLabel}>카카오채널 문의 (ID: s**_k)</span>
                      <span style={styles.highIntentBadge}>구매 확률 94%</span>
                    </div>
                    <div style={styles.leadContext}>"이번 주말 백일 잔치인데 혹시 급행 제작 가능한가요?"</div>
                  </div>
                  <div style={styles.leadItem}>
                    <div style={styles.leadHeader}>
                      <span style={styles.itemLabel}>구글 폼 제출 (커스텀 주문)</span>
                      <span style={styles.highIntentBadge}>구매 확률 88%</span>
                    </div>
                    <div style={styles.leadContext}>"답례품 50세트 단가 문의드립니다."</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3️⃣ 탭: 해시태그 분석 & 트렌드 분석 (요구사항 4, 5) */}
        {activeTab === '인사이트 랩' && (
          <div className="fade-in">
            <div style={styles.heroSection}>
              <span style={styles.badge}>Data Analytics</span>
              <h1 style={styles.heroTitle}>알고리즘 트렌드 및 해시태그 분석</h1>
              <p style={styles.heroSubtitle}>현재 공예 시장의 트렌드를 추적하고, 게시물 노출을 극대화할 최적의 해시태그 조합을 제안합니다.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
              <div style={styles.glassCard}>
                <h3 style={styles.cardTitle}><span style={{marginRight:'8px'}}><Icons.TrendingUp /></span> 실시간 공예 시장 트렌드</h3>
                <div style={styles.trendList}>
                  <div style={styles.trendRow}>
                    <span style={styles.trendRank}>1</span>
                    <span style={styles.trendKeyword}>친환경 제스모나이트 오브제</span>
                    <span style={styles.trendUp}>+240%</span>
                  </div>
                  <div style={styles.trendRow}>
                    <span style={styles.trendRank}>2</span>
                    <span style={styles.trendKeyword}>환갑 2단 케이크 토퍼</span>
                    <span style={styles.trendUp}>+185%</span>
                  </div>
                  <div style={styles.trendRow}>
                    <span style={styles.trendRank}>3</span>
                    <span style={styles.trendKeyword}>반려식물 미니 화분</span>
                    <span style={styles.trendUp}>+92%</span>
                  </div>
                </div>
              </div>

              <div style={styles.glassCard}>
                <h3 style={styles.cardTitle}><span style={{marginRight:'8px'}}><Icons.Hash /></span> 고효율 해시태그 추출기</h3>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.6)' }}>
                  <div style={{ fontSize: '0.8rem', color: '#555', marginBottom: '0.8rem' }}>AI 추천: 이번 주 전환율이 가장 높은 조합</div>
                  <div style={styles.tagCloud}>
                    <span style={styles.tagBest}>#제스모나이트소품</span>
                    <span style={styles.tagBest}>#백일토퍼제작</span>
                    <span style={styles.tagNormal}>#집들이선물추천</span>
                    <span style={styles.tagNormal}>#발포세라믹</span>
                    <span style={styles.tagNormal}>#블라썸토퍼</span>
                  </div>
                  <button style={{ ...styles.actionBtn, width: '100%', marginTop: '1rem' }}>클립보드에 복사</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// 🌿 자연 친화적이면서도 하이엔드 테크 감성을 결합한 스타일
const styles = {
  container: {
    minHeight: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1536657464919-892534f60d6e?q=80&w=2574&auto=format&fit=crop")',
    backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
    position: 'relative', fontFamily: "'Pretendard', -apple-system, sans-serif",
    color: '#1a1a1a', padding: '1.5rem 2rem', boxSizing: 'border-box',
  },
  bgOverlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,248,240,0.8) 100%)',
    backdropFilter: 'blur(10px)', pointerEvents: 'none', zIndex: 1,
  },
  topHeader: {
    position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    maxWidth: '1100px', margin: '0 auto 3rem auto',
  },
  logoArea: { display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '800', fontSize: '1.2rem' },
  logoText: { letterSpacing: '-0.5px', color: '#1a1a1a' },
  navCapsule: {
    background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(20px)', padding: '6px', borderRadius: '40px',
    display: 'flex', gap: '6px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(255, 255, 255, 0.9)',
  },
  navBtn: {
    display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'transparent',
    padding: '0.6rem 1.2rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', color: '#555', cursor: 'pointer', transition: 'all 0.2s',
  },
  activeNavBtn: { background: '#ffffff', color: '#1a1a1a', fontWeight: '700', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  iconWrapper: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  
  mainWrapper: { position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto' },
  heroSection: { marginBottom: '3rem' },
  badge: { fontSize: '0.75rem', fontWeight: '700', color: '#2d5a27', background: 'rgba(255,255,255,0.9)', padding: '6px 12px', borderRadius: '12px', textTransform: 'uppercase' },
  heroTitle: { fontSize: '2.4rem', fontWeight: '800', margin: '1rem 0', color: '#1a1a1a', letterSpacing: '-1px' },
  heroSubtitle: { fontSize: '0.95rem', color: '#444', margin: 0, fontWeight: '400', lineHeight: '1.6', maxWidth: '800px' },
  
  gridContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(24px)', borderRadius: '24px', padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)', border: '1px solid rgba(255, 255, 255, 0.9)',
  },
  cardTitle: { display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1.5rem 0', color: '#1a1a1a' },
  
  uploadBox: {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '160px',
    border: '1px dashed rgba(45, 90, 39, 0.4)', borderRadius: '16px', background: 'rgba(255,255,255,0.4)', cursor: 'pointer',
  },
  listGroup: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)' },
  itemLabel: { fontSize: '0.9rem', color: '#1a1a1a', fontWeight: '600' },
  actionBtn: { background: '#2d5a27', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer' },
  statusProcessing: { fontSize: '0.75rem', color: '#888', padding: '6px 12px', background: 'rgba(0,0,0,0.05)', borderRadius: '12px', fontWeight: '600' },
  
  statBox: { flex: 1, background: 'rgba(255,255,255,0.5)', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.8)' },
  statLabel: { display: 'block', fontSize: '0.8rem', color: '#555', marginBottom: '0.4rem' },
  statValue: { fontSize: '2rem', fontWeight: '300', color: '#1a1a1a' },
  
  leadItem: { background: 'rgba(255,255,255,0.6)', padding: '1.2rem', borderRadius: '16px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.8)' },
  leadHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' },
  highIntentBadge: { fontSize: '0.7rem', background: '#ffebee', color: '#c62828', padding: '4px 8px', borderRadius: '8px', fontWeight: '700' },
  leadContext: { fontSize: '0.85rem', color: '#444', fontStyle: 'italic' },
  
  trendList: { display: 'flex', flexDirection: 'column', gap: '0.8rem' },
  trendRow: { display: 'flex', alignItems: 'center', padding: '0.8rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px' },
  trendRank: { fontSize: '1rem', fontWeight: '800', color: '#2d5a27', width: '30px' },
  trendKeyword: { flex: 1, fontSize: '0.9rem', fontWeight: '600', color: '#1a1a1a' },
  trendUp: { fontSize: '0.8rem', fontWeight: '700', color: '#d32f2f' },
  
  tagCloud: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  tagBest: { fontSize: '0.8rem', background: 'rgba(45, 90, 39, 0.15)', color: '#2d5a27', padding: '6px 12px', borderRadius: '12px', fontWeight: '700' },
  tagNormal: { fontSize: '0.8rem', background: 'rgba(0,0,0,0.05)', color: '#555', padding: '6px 12px', borderRadius: '12px' }
};