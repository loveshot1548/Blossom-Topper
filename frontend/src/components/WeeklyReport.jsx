import React from 'react';

export default function WeeklyReport() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <span style={styles.badge}>주간 성과 데이터 분석</span>
        <h1 style={{ fontSize: '2.3rem', fontWeight: '800', margin: '0.6rem 0 0.4rem 0' }}>공방 주간 통합 레포트</h1>
        <p style={{ fontSize: '0.95rem', color: '#475569' }}>지난주 공방 매출, 품목별 판매량, SNS 전환율을 한눈에 파악합니다.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div style={styles.glassCard}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>📈 주요 품목별 판매 비중 (최근 7일)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div>
              <div style={styles.reportRow}><span>🎂 케이크 토퍼</span><strong>45% (68건)</strong></div>
              <div style={styles.barBg}><div style={{ ...styles.barFill, width: '45%' }}></div></div>
            </div>
            <div>
              <div style={styles.reportRow}><span>🏺 제스모나이트 오브제</span><strong>30% (45건)</strong></div>
              <div style={styles.barBg}><div style={{ ...styles.barFill, width: '30%' }}></div></div>
            </div>
            <div>
              <div style={styles.reportRow}><span>🪴 발포세라믹 화분</span><strong>15% (22건)</strong></div>
              <div style={styles.barBg}><div style={{ ...styles.barFill, width: '15%' }}></div></div>
            </div>
            <div>
              <div style={styles.reportRow}><span>🖼️ 글라스아트 썬캐처</span><strong>10% (15건)</strong></div>
              <div style={styles.barBg}><div style={{ ...styles.barFill, width: '10%' }}></div></div>
            </div>
          </div>
        </div>

        <div style={styles.glassCard}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>📋 AI 레포트 요약</h3>
          <p style={{ fontSize: '0.85rem', color: '#333', lineHeight: '1.6' }}>
            • 이번 주는 <b>토퍼 수요</b>가 전주 대비 12% 증가했습니다.<br />
            • 인스타그램을 통한 유입 문의가 전체 매출의 68%를 차지했습니다.<br />
            • 다음 주 예상 인기 항목: <b>백일/환갑 맞춤 토퍼</b>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  badge: { fontSize: '0.8rem', fontWeight: '800', color: '#385e2b', background: 'rgba(255,255,255,0.8)', padding: '4px 10px', borderRadius: '8px' },
  glassCard: { background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(20px)', borderRadius: '28px', padding: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.8)' },
  reportRow: { display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.3rem' },
  barBg: { width: '100%', height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px' },
  barFill: { height: '100%', background: '#658354', borderRadius: '4px' }
};