'use client';

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const EXPERIENCES = [
  {
    period: '2025.06 — 2025.09',
    org: '阿里巴巴集团控股有限公司（阿里巴巴国际站）',
    role: '法本阿里直管驻场专家 · 品牌创意 · 付费广告摄制组长',
    points: [
      '从零搭建阿里国际站 GG 创意拍摄与剪辑体系，独立完成真人实拍项目并主导测新复盘。',
      '0-1 搭建 Google 与社媒跑量拍摄模板，沉淀样本库与常用道具库，让团队交接后仍能持续产出。',
      '把交接前的视频 CP New UV 压到 1.5 元上下，而行业里同类传统素材普遍在 3 元以上——效率本身也是一种创意。',
    ],
  },
  {
    period: '2024.01 — 2025.06',
    org: '胡桃街（上海）信息技术有限公司（拼多多 · TEMU）',
    role: '用户增长 / 市场部 · 社媒/信息流广告摄制',
    points: [
      '负责 TEMU 电子类目美区创意广告的拍摄与剪辑，在国内搭建出符合美式审美的置景体系，独立完成 BCA 与信息流视频的拍剪交付。',
      '从 0 到 1 搭建电子类目信息流与社媒跑量拍摄模板，组建样本库与常用道具库；转组交接前，团队已稳定产出日均花费超 2500 美元的视频投放包，累计 140 余个。',
      '产出的 Ins / TikTok 爆款素材中，便携打印机视频包在 2025 年 1 月连续 3 天登顶 TEMU 全站花费 TOP1，并长期占据 TikTok "photo printer" 关键词搜索首位。',
    ],
  },
];

const EDUCATION = {
  school: '鲁迅美术学院',
  major: '影视摄影与制作',
  period: '2019.09 — 2023.06',
};

const SKILLS = {
  software: ['DaVinci Resolve', 'Premiere', 'Photoshop', '剪映'],
  hardware: ['各类灯具', '摄影器材', '爱图仕', '南光', '索尼', '佳能', '尼康'],
};

export default function CareerTab() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflowY: 'auto',
        padding: '110px 8% 80px',
        color: '#fff',
        fontFamily: FONT,
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            letterSpacing: '0.5px',
            marginBottom: '8px',
            color: '#fff',
          }}
        >
          生涯
        </h2>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '52px',
            lineHeight: 1.7,
          }}
        >
          近两年专注社媒与信息流广告创意中台，作品累计播放量过亿——
          这条路上的每一步，都是用数据验证审美，用审美抵抗平庸。
        </p>

        {/* 时间线 */}
        <div style={{ position: 'relative', paddingLeft: '28px' }}>
          <div
            style={{
              position: 'absolute',
              left: '5px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background:
                'linear-gradient(to bottom, rgba(0,255,204,0.6), rgba(0,255,204,0.05))',
            }}
          />
          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '48px' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '-28px',
                  top: '6px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#00ffcc',
                  boxShadow: '0 0 10px rgba(0,255,204,0.7)',
                }}
              />
              <div
                style={{
                  fontSize: '0.82rem',
                  color: '#00ffcc',
                  letterSpacing: '0.5px',
                  marginBottom: '6px',
                  fontWeight: 600,
                }}
              >
                {exp.period}
              </div>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBottom: '4px',
                  lineHeight: 1.4,
                }}
              >
                {exp.org}
              </h3>
              <div
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.55)',
                  marginBottom: '14px',
                }}
              >
                {exp.role}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {exp.points.map((p, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      color: 'rgba(255,255,255,0.82)',
                      marginBottom: '10px',
                      paddingLeft: '16px',
                      borderLeft: '2px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 教育 */}
        <div style={{ marginTop: '20px', marginBottom: '52px' }}>
          <div
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            教育经历
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: '8px',
              paddingBottom: '14px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div>
              <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                {EDUCATION.school}
              </span>
              <span
                style={{
                  fontSize: '0.92rem',
                  color: 'rgba(255,255,255,0.55)',
                  marginLeft: '12px',
                }}
              >
                {EDUCATION.major}
              </span>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
              {EDUCATION.period}
            </span>
          </div>
        </div>

        {/* 技能 */}
        <div>
          <div
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            个人技能
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <SkillRow label="软件" items={SKILLS.software} />
            <SkillRow label="硬件" items={SKILLS.hardware} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
      <span
        style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.45)',
          minWidth: '40px',
          marginTop: '6px',
        }}
      >
        {label}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map((item) => (
          <span
            key={item}
            style={{
              fontSize: '0.85rem',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
