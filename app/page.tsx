'use client';

import { useState } from 'react';
import CareerTab from './components/CareerTab';
import WorksTab from './components/WorksTab';
import ContactTab from './components/ContactTab';

type TabKey = 'home' | 'career' | 'works' | 'contact';

const NAV_ITEMS: { key: TabKey; label: string }[] = [
  { key: 'home', label: '首页' },
  { key: 'career', label: '生涯' },
  { key: 'works', label: '作品案例' },
  { key: 'contact', label: '联系方式' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* 1. 底层：Spline 3D 艺术交互场景 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <iframe
          src="https://my.spline.design/retrofuturismbganimation-Xq4eQdvzcRBAuWhRqmFk7Xdv/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }}
          title="3D background"
        />
      </div>

      {/* 2. 顶部导航条 */}
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          padding: '28px 0',
          pointerEvents: 'none', // 容器穿透，按钮单独恢复
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '8px',
            padding: '6px',
            borderRadius: '999px',
            background: 'rgba(20, 20, 20, 0.55)',
            backdropFilter: 'blur(20px) saturate(160%)',
            WebkitBackdropFilter: 'blur(20px) saturate(160%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            pointerEvents: 'auto',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                style={{
                  position: 'relative',
                  padding: '9px 22px',
                  borderRadius: '999px',
                  border: 'none',
                  background: isActive ? '#00ffcc' : 'transparent',
                  color: isActive ? '#000' : 'rgba(255,255,255,0.7)',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.3px',
                  cursor: 'pointer',
                  transition:
                    'background 0.45s cubic-bezier(0.65, 0, 0.35, 1), color 0.45s cubic-bezier(0.65, 0, 0.35, 1), transform 0.3s cubic-bezier(0.65, 0, 0.35, 1)',
                  transform: isActive ? 'scale(1)' : 'scale(0.97)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.95)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 3. 内容区域：四个 Tab，淡入淡出 + 轻微位移过渡 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      >
        {/* 首页：仅保留标题，移除宣言文案与联系按钮 */}
        <PageLayer active={activeTab === 'home'}>
          <div
            style={{
              position: 'absolute',
              top: '12%',
              left: '8%',
              maxWidth: '550px',
              color: '#fff',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              pointerEvents: 'none',
            }}
          >
            <h1
              style={{
                fontSize: '2.6rem',
                fontWeight: 800,
                letterSpacing: '1px',
                lineHeight: 1.2,
              }}
            >
              
            </h1>
          </div>
        </PageLayer>

        <PageLayer active={activeTab === 'career'}>
          <CareerTab />
        </PageLayer>

        <PageLayer active={activeTab === 'works'}>
          <WorksTab />
        </PageLayer>

        <PageLayer active={activeTab === 'contact'}>
          <ContactTab />
        </PageLayer>
      </div>
    </main>
  );
}

/** 统一的 Tab 切换容器：淡入淡出叠加轻微上移，营造苹果官网式的丝滑过渡 */
function PageLayer({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0px)' : 'translateY(14px)',
        transition:
          'opacity 0.55s cubic-bezier(0.65, 0, 0.35, 1), transform 0.55s cubic-bezier(0.65, 0, 0.35, 1)',
        pointerEvents: active ? 'auto' : 'none',
        visibility: active ? 'visible' : 'hidden',
      }}
    >
      {children}
    </div>
  );
}
