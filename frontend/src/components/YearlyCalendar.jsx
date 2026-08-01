import React from 'react';

export default function YearlyCalendar() {
  const events = [
    { month: '5월', title: '어버이날 / 스승의 날', target: '카네이션 토퍼 & 감사패', status: '준비 완료' },
    { month: '8월', title: '여름 휴가철 / 백일·돌잔치', target: '글라스아트 썬캐처 & 여행 토퍼', status: '진행중' },
    { month: '10월', title: '가을 웨딩 시즌', target: '제스모나이트 답례품 & 링필로우', status: '대기' },
    { month: '12월', title: '크리스마스 / 연말 시즌', target: '발포세라믹 캔들홀더 & 캘리그라피', status: '대기' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <span style={styles.badge}>시즌별 마케팅 플래너</span>
        <h1 style={{ fontSize: '2.3rem', fontWeight: '800', margin: '0.6rem 0 0.4rem 0' }}>공방 연간 주요 행사표</h1>
        <p style={{ fontSize: '0.95rem', color: '#475569' }}>연중 특수 시즌에 맞춰 공방 샘플 제작 및 미리보기 마케팅 일정을 관리합니다.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
        {events.map((ev, idx) => (
          <div key={idx} style={styles.glassCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#658354' }}>{ev.month}</span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(0,0,0,0.05)', padding: '3px 8px', borderRadius: '8px' }}>{ev.status}</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{ev.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#555', margin: 0 }}>🎯 주력 자재/작품: <b>{ev.target}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  badge: { fontSize: '0.8rem', fontWeight: '800', color: '#385e2b', background: 'rgba(255,255,255,0.8)', padding: '4px 10px', borderRadius: '8px' },
  glassCard: { background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(20px)', borderRadius: '28px', padding: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.8)' }
};