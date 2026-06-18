import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
      {/* 1. 底层：你的 Spline 3D 艺术交互场景 */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <Spline scene="https://prod.spline.design/UqzhksmPZzrSvypG/scene.splinecode" />
      </div>

      {/* 2. 表层：你的个人简介文案（浮动在 3D 场景之上，不影响鼠标抓取和移动交互） */}
      <div style={{ 
        position: 'absolute', 
        top: '12%', 
        left: '8%', 
        zIndex: 2, 
        color: '#fff', 
        maxWidth: '550px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        pointerEvents: 'none' /* 关键：确保鼠标穿过文字，依然能触发底层的 3D 交互 */
      }}>
        {/* 一句话身份宣示 */}
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '1px', lineHeight: 1.2 }}>
          Global Content Catalyst &<br />
          AIGC Practitioner
        </h1>
        
        {/* 艺术宣言 / 核心方法论 */}
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#ccc', borderLeft: '3px solid #00ffcc', paddingLeft: '20px' }}>
          “在算法的严谨与感性的审美之间，用技术重构全球内容的原生质感。”
          <br /><br />
          拒绝工业化的机械堆砌，利用前沿 AI 工作流与深度的本地化洞察，将复杂的商业策略转化为跨越文化壁垒的视听共鸣。
        </p>

        {/* 联系按钮（需要恢复鼠标点击事件） */}
        <a href="mailto:your_email@example.com" style={{ 
          display: 'inline-block', 
          marginTop: '2.5rem', 
          padding: '12px 30px', 
          background: '#00ffcc', 
          color: '#000', 
          textDecoration: 'none', 
          fontWeight: 600, 
          borderRadius: '25px',
          pointerEvents: 'auto', /* 允许按钮被点击 */
          transition: 'transform 0.2s'
        }}>
          Connect with me
        </a>
      </div>
    </main>
  );
}