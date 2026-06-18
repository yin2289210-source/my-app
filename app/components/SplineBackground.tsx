'use client';

import Spline from '@splinetool/react-spline/next';
import { useEffect, useState } from 'react';

/**
 * 带超时保护的 Spline 3D 场景容器。
 * 如果场景在规定时间内没有成功加载（比如 Spline 服务异常、额度用尽等），
 * 就主动放弃并卸载该组件，避免它无限重试请求，拖垫整站的点击响应。
 */
export default function SplineBackground({ scene }: { scene: string }) {
  const [loaded, setLoaded] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) {
        setGaveUp(true);
      }
    }, 6000); // 6 秒内没加载成功就放弃
    return () => clearTimeout(timer);
  }, [loaded]);

  if (gaveUp) {
    // 优雅降级：保留纯黑背景，不影响导航和其余内容的正常使用
    return <div style={{ width: '100%', height: '100%', background: '#000' }} />;
  }

  return <Spline scene={scene} onLoad={() => setLoaded(true)} />;
}
