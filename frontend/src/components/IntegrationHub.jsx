import React, { useState } from 'react';

// 미니멀 SVG 아이콘 세트
const Icons = {
  Formill: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  Flow: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"/><line x1="12" y1="13" x2="12" y2="15"/></svg>,
  Switch: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3v18"/><path d="M6 3v18"/><circle cx="18" cy="16" r="3"/><circle cx="6" cy="8" r="3"/></svg>,
  Studio: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
  Opal: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  Whisk: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
};

export default function IntegrationHub() {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    { id: 'formill', name: 'Formill', desc: '고객 주문 및 문의 폼 수집', status: '활성', icon: <Icons.Formill /> },
    { id: 'flow', name: 'Flow', desc: '데이터 수신 트리거 및 전달', status: '대기중', icon: <Icons.Flow /> },
    { id: 'switch', name: 'Switch', desc: '조건별 로직 라우팅 분기', status: '활성', icon: <Icons.Switch /> },
    { id: 'studio', name: 'AI Studio', desc: '텍스트 분석 및 캡션 자동 생성', status: '활성', icon: <Icons.Studio /> },
    { id: 'opal', name: 'Google Opal', desc: '시각적 미디어 및 다이내믹 렌더링', status: '대기중', icon: <Icons.Opal /> },
    { id: 'whisk', name: 'Whisk', desc: '최종 패키징 및 SNS 자동 배포', status: '활성', icon: <Icons.Whisk /> },
  ];

  return (
    <div className="fade-in">
      <div style={styles.heroSection}>
        <span style={styles.badge}>System Architecture</span>
        <h1 style={styles.heroTitle}>블라썸 토퍼 통합 자동화 인프라</h1>
        <p style={styles.heroSubtitle}>수집부터 배포까지, 크롤링 없이 공식 API를 통해 유기적으로 연결된 6개의 핵심 모듈 상태를 모니터링합니다.</p>
      </div>

      <div style={styles.pipelineContainer}>
        {/* 모듈 연결 시각화 라인 */}
        <div style={styles.connectingLine}></div>

        {modules.map((mod, index) => (
          <div key={mod.id} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            
            <div 
              style={{ ...styles.moduleNode, ...(activeModule === mod.id ? styles.nodeActive : {}) }}
              onMouseEnter={() => setActiveModule(mod.id)}
              onMouseLeave={() => setActiveModule(null)}
            >
              <div style={styles.iconBox}>{mod.icon}</div>
              <h4 style={styles.moduleName}>{mod.name}</h4>
              <p style={styles.moduleDesc}>{mod.desc}</p>
              
              <div style={mod.status === '활성' ? styles.statusActive : styles.statusStandby}>
                {mod.status}
              </div>
            </div>

            {/* 마지막 노드가 아니면 화살표 표시 */}
            {index < modules.length - 1 && (
              <div style={styles.arrowWrapper}>
                <Icons.ArrowRight />
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={styles.gridContainer}>
        <div style={styles.glassCard}>
          <h3 style={styles.cardTitle}>연동 로그 및 상태 분석</h3>
          <div style={styles.logBox}>
            <div style={styles.logItem}><span style={styles.logTime}>17:42</span> [Formill] 발포세라믹 화분 문의 접수 완료</div>
            <div style={styles.logItem}><span style={styles.logTime}>17:42</span> [Flow] 트리거 작동, 데이터 파싱 완료</div>
            <div style={styles.logItem}><span style={styles.logTime}>17:43</span> [Switch] '제품문의' 분기로 라우팅 처리</div>
            <div style={styles.logItem}><span style={styles.logTime}>17:43</span> [AI Studio] 고객 의도 분석 (구매 확률 88% 추정)</div>
            <div style={styles.logItem}><span style={styles.logTime}>17:44</span> [Whisk] 카카오톡 채널 연동 알림 발송 완료</div>
          </div>
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
  
  pipelineContainer: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem',
    background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(20px)', borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.8)', marginBottom: '3rem', position: 'relative', overflowX: 'auto',
  },
  moduleNode: {
    width: '130px', height: '160px', background: '#fff', borderRadius: '16px', padding: '1.2rem 1rem',
    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between',
    boxShadow: '0 4px 16px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s', cursor: 'pointer', zIndex: 2,
  },
  nodeActive: { transform: 'translateY(-5px)', boxShadow: '0 12px 24px rgba(45, 90, 39, 0.15)', border: '1px solid rgba(45, 90, 39, 0.3)' },
  iconBox: { width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(45, 90, 39, 0.05)', color: '#2d5a27', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' },
  moduleName: { fontSize: '0.95rem', fontWeight: '700', color: '#1a1a1a', margin: '0 0 0.4rem 0' },
  moduleDesc: { fontSize: '0.7rem', color: '#666', margin: 0, lineHeight: '1.4' },
  statusActive: { marginTop: '0.8rem', fontSize: '0.7rem', background: 'rgba(45, 90, 39, 0.1)', color: '#2d5a27', padding: '4px 8px', borderRadius: '8px', fontWeight: '700' },
  statusStandby: { marginTop: '0.8rem', fontSize: '0.7rem', background: 'rgba(0,0,0,0.05)', color: '#666', padding: '4px 8px', borderRadius: '8px', fontWeight: '600' },
  
  arrowWrapper: { color: '#999', margin: '0 10px', zIndex: 1 },
  
  gridContainer: { display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' },
  glassCard: { background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(24px)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.9)' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1.5rem 0', color: '#1a1a1a' },
  
  logBox: { background: 'rgba(255,255,255,0.7)', borderRadius: '16px', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.85rem' },
  logItem: { padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', color: '#333' },
  logTime: { color: '#888', marginRight: '12px' }
};