import React from 'react';

export default function HomeDashboard() {
  return (
    <div>
      <div style={styles.heroSection}>
        <span style={styles.badge}>공방 스마트 자동화 플랫폼</span>
        <h1 style={styles.heroTitle}>AI와 함께 성장하는<br />핸드메이드 공방 케어</h1>
        <p style={styles.heroSubtitle}>
          제스모나이트, 토퍼, 글라스아트, 발포세라믹 제작부터 마케팅 분석까지 스마트하게 관리합니다.
        </p>
      </div>

      <div style={styles.gridContainer}>
        {/* 현황 모니터링 카드 */}
        <div style={styles.glassCard}>
          <div style={styles.cardHeader}>
            <span style={styles.cardCategory}>작업 현황 모니터링</span>
            <span style={{ color: '#888' }}>•••</span>
          </div>

          <div style={styles.mainMetricGroup}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '1rem 0 0 0' }}>제작 진행률 - A101</h2>
            <span style={styles.percentTag}>+15%</span>
          </div>

          <div style={styles.gaugeBarBg}>
            <div style={styles.gaugeBarFill}></div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#555', marginBottom: '1.5rem' }}>
            <span>목표 달성률</span>
            <strong style={{ color: '#2d5a27' }}>97% 완료</strong>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
            <div style={styles.subCard}>🎂 토퍼 (12개 작업중)</div>
            <div style={styles.subCard}>🏺 제스모나이트 (5개 건조중)</div>
            <div style={styles.subCard}>🖼️ 글라스아트 (3개 완성)</div>
            <div style={styles.subCard}>🪴 발포세라믹 (8개 대기중)</div>
          </div>
        </div>

        {/* 중앙 공방 가동률 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ ...styles.glassCard, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '180px' }}>
            <div style={styles.donutCircle}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800' }}>80%</span>
              <span style={{ fontSize: '0.75rem', color: '#555' }}>공방 가동률</span>
            </div>
          </div>
        </div>

        {/* AI 성과 추적 */}
        <div style={styles.glassCard}>
          <div style={styles.cardHeader}>
            <span style={styles.cardCategory}>성과 추적</span>
            <span style={styles.aiInsightTag}>✨ AI 인사이트</span>
          </div>
          <div style={{ margin: '1.5rem 0' }}>
            <span style={{ fontSize: '0.8rem', color: '#444' }}>주간 주문 건수 증가율</span>
            <h3 style={{ fontSize: '1.6rem', margin: '0.2rem 0' }}>+18.4% 상승</h3>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: '16px' }}>
            <p style={{ fontSize: '0.8rem', margin: 0, color: '#333' }}>💡 <b>추천 행동:</b> 주말 백일 토퍼 수요 급증 예상. 자재 재고 추가 확인 필요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroSection: { marginBottom: '2rem' },
  badge: { fontSize: '0.8rem', fontWeight: '800', color: '#385e2b', background: 'rgba(255,255,255,0.8)', padding: '4px 10px', borderRadius: '8px' },
  heroTitle: { fontSize: '2.3rem', fontWeight: '800', margin: '0.6rem 0 0.4rem 0', color: '#0f172a' },
  heroSubtitle: { fontSize: '0.95rem', color: '#475569', margin: 0 },
  gridContainer: { display: 'grid', gridTemplateColumns: '1.1fr 1fr 1.1fr', gap: '1.5rem', alignItems: 'start' },
  glassCard: { background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(20px)', borderRadius: '28px', padding: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.8)' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  cardCategory: { fontSize: '0.9rem', fontWeight: '700' },
  mainMetricGroup: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
  percentTag: { fontSize: '0.75rem', background: 'rgba(101, 131, 84, 0.15)', color: '#2d5a27', padding: '2px 6px', borderRadius: '6px', fontWeight: 'bold' },
  gaugeBarBg: { width: '100%', height: '8px', background: 'rgba(0,0,0,0.06)', borderRadius: '4px', margin: '1rem 0 0.5rem 0' },
  gaugeBarFill: { width: '97%', height: '100%', background: 'linear-gradient(90deg, #8bb33d 0%, #4d7c0f 100%)', borderRadius: '4px' },
  subCard: { background: 'rgba(255, 255, 255, 0.5)', padding: '0.8rem', borderRadius: '14px', fontSize: '0.8rem', fontWeight: 'bold' },
  donutCircle: { width: '130px', height: '130px', borderRadius: '50%', border: '12px solid #658354', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  aiInsightTag: { background: '#658354', color: '#fff', fontSize: '0.75rem', padding: '0.3rem 0.7rem', borderRadius: '12px', fontWeight: 'bold' }
};