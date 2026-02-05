import { useEffect, useMemo, useRef } from 'react';

const buildHeartPoints = (samples = 520) => {
  const points = [];
  for (let i = 0; i <= samples; i += 1) {
    const t = (i / samples) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);
    points.push({ x, y });
  }
  return points;
};

const drawGrid = (ctx, width, height, scale, centerX, centerY) => {
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 182, 215, 0.35)';
  ctx.lineWidth = 1;
  const step = scale * 4;
  for (let x = centerX % step; x <= width; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = centerY % step; y <= height; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();
};

const drawAxes = (ctx, width, height, centerX, centerY) => {
  ctx.save();
  ctx.strokeStyle = 'rgba(91, 58, 74, 0.5)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.stroke();
  ctx.restore();
};

export default function HeartSketch({ isActive }) {
  const canvasRef = useRef(null);
  const points = useMemo(() => buildHeartPoints(), []);

  useEffect(() => {
    if (!isActive) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    const centerX = width / 2;
    const centerY = height / 2 + 20;
    const scale = Math.min(width, height) / 40;
    const duration = 5200;
    let frameId;

    const draw = (progress) => {
      ctx.clearRect(0, 0, width, height);
      drawGrid(ctx, width, height, scale, centerX, centerY);
      drawAxes(ctx, width, height, centerX, centerY);

      const maxIndex = Math.floor(progress * (points.length - 1));
      if (maxIndex <= 0) return;

      ctx.save();
      ctx.strokeStyle = '#FF4F98';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      points.slice(0, maxIndex).forEach((point, index) => {
        const x = centerX + point.x * scale;
        const y = centerY - point.y * scale;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 79, 152, 0.35)';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.restore();

      const pencil = points[maxIndex];
      if (pencil) {
        const px = centerX + pencil.x * scale;
        const py = centerY - pencil.y * scale;
        ctx.save();
        ctx.fillStyle = '#5B3A4A';
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#F6A3C7';
        ctx.beginPath();
        ctx.arc(px + 6, py - 6, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    const start = performance.now();

    const loop = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      draw(progress);
      if (progress < 1) {
        frameId = requestAnimationFrame(loop);
      }
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, points]);

  return (
    <div className="sketch">
      <canvas ref={canvasRef} width={520} height={360} />
      <div className="sketch-caption">x, y</div>
    </div>
  );
}
