'use client';

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

type WorkItem = {
  title: string;
  desc: string;
  duration?: string;
  // 之后替换为真实视频地址即可，比如 'https://your-cdn.com/xxx.mp4'
  videoUrl?: string;
  thumbUrl?: string;
};

type WorkCategory = {
  category: string;
  items: WorkItem[];
};

const CATEGORIES: WorkCategory[] = [
  {
    category: '社媒向纯商品',
    items: [
      { title: '星空灯', desc: '氛围感产品展示，凸显灯光质感', duration: '00:23' },
      { title: '便携打印机', desc: 'TEMU 全站花费 TOP1 爆款素材', duration: '00:30' },
      { title: '迷你手机', desc: '小巧机身的趣味开箱呈现', duration: '00:28' },
      { title: '唱片机', desc: '复古质感与现代产品的结合', duration: '00:26' },
      { title: '居家手机支架', desc: '生活场景下的实用演示', duration: '00:26' },
      { title: '手机置物架', desc: '卧室场景的自然种草', duration: '00:18' },
      { title: '小型相机', desc: '产品细节与质感特写', duration: '00:28' },
      { title: '手机壳', desc: '色彩与材质的视觉吸引', duration: '00:14' },
    ],
  },
  {
    category: '信息流剧情',
    items: [
      { title: '手表', desc: '剧情化场景植入，强化记忆点', duration: '00:33' },
      { title: '耳机', desc: '动态运镜下的产品亮点呈现', duration: '00:32' },
      { title: '工具', desc: '真实使用场景的叙事化表达', duration: '00:24' },
    ],
  },
  {
    category: '产品教学',
    items: [
      { title: '海康 eDVR', desc: '功能讲解与操作演示' },
      { title: '海康球形摄像头', desc: '安装与使用要点讲解' },
    ],
  },
  {
    category: 'AIGC 以及数字人案例',
    items: [
      { title: '手机壳图案', desc: 'AI 生成图案的产品化呈现', duration: '00:14' },
      { title: '数字人口播', desc: '数字人形象的口播内容制作', duration: '00:36' },
      { title: '数字人口播 II', desc: '多场景数字人口播延展', duration: '00:39' },
    ],
  },
  {
    category: '汽车类剪辑',
    items: [{ title: '奔驰素材二剪', desc: '汽车类素材的二次创意混剪' }],
  },
  {
    category: '真人实拍 B2B 平台推广',
    items: [
      { title: '车内场景', desc: '真人实拍的场景化推广内容', duration: '00:19' },
      { title: '园区', desc: '企业园区实景拍摄', duration: '00:21' },
      { title: '办公室', desc: '办公场景下的真实呈现', duration: '00:28' },
    ],
  },
];

export default function WorksTab() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflowY: 'auto',
        padding: '110px 8% 100px',
        color: '#fff',
        fontFamily: FONT,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}
        >
          作品案例
        </h2>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '56px',
            lineHeight: 1.7,
          }}
        >
          以下内容均为本人拍摄或剪辑，真实承诺。
        </p>

        {CATEGORIES.map((cat) => (
          <section key={cat.category} style={{ marginBottom: '56px' }}>
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '20px',
                paddingLeft: '14px',
                borderLeft: '3px solid #00ffcc',
              }}
            >
              {cat.category}
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '18px',
              }}
            >
              {cat.items.map((item) => (
                <VideoCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        ))}

        {/* 提示区：告知用户这里目前是占位状态 */}
        <div
          style={{
            marginTop: '40px',
            padding: '18px 22px',
            borderRadius: '12px',
            background: 'rgba(0,255,204,0.06)',
            border: '1px solid rgba(0,255,204,0.2)',
            fontSize: '0.88rem',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7,
          }}
        >
          以上为占位展示，真实视频上传方法见教程文档。
        </div>
      </div>
    </div>
  );
}

function VideoCard({ item }: { item: WorkItem }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 16',
          borderRadius: '10px',
          overflow: 'hidden',
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {/* 占位播放按钮，之后替换为 <video> 标签 */}
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '13px solid rgba(255,255,255,0.85)',
              marginLeft: '3px',
            }}
          />
        </div>
        {item.duration && (
          <span
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              fontSize: '0.7rem',
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'rgba(0,0,0,0.55)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            {item.duration}
          </span>
        )}
      </div>
      <div>
        <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>
          {item.title}
        </div>
        <div
          style={{
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.5,
            marginTop: '2px',
          }}
        >
          {item.desc}
        </div>
      </div>
    </div>
  );
}
