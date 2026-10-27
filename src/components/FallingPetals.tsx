import { useEffect, useRef } from 'react';

interface FallingPetalsProps {
  density?: number;
  className?: string;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  oscillationSpeed: number;
  oscillationDistance: number;
  oscillationAngle: number;
  opacity: number;
  imageIndex: number;
}

const PETAL_IMAGES = [
  '/assets/petals/petal-real-1.png',
  '/assets/petals/petal-real-2.png',
  '/assets/petals/petal-real-3.png',
  '/assets/petals/petal-real-4.png',
  '/assets/petals/petal-real-5.png',
  '/assets/petals/petal-real-6.png',
];

export function FallingPetals({ density = 14, className = '' }: FallingPetalsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect user reduced-motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Preload petal images
    const images: HTMLImageElement[] = [];
    PETAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      images.push(img);
    });

    const actualDensity = width < 640 ? Math.min(density, 8) : density;

    const petals: Petal[] = Array.from({ length: actualDensity }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height * 0.5,
      size: 22 + Math.random() * 24,
      speedY: 0.9 + Math.random() * 1.3,
      speedX: -0.2 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.6,
      oscillationSpeed: 0.02 + Math.random() * 0.03,
      oscillationDistance: 1 + Math.random() * 2.2,
      oscillationAngle: Math.random() * Math.PI * 2,
      opacity: 0.65 + Math.random() * 0.35,
      imageIndex: Math.floor(Math.random() * PETAL_IMAGES.length),
    }));

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.oscillationAngle += petal.oscillationSpeed;
        petal.x += petal.speedX + Math.sin(petal.oscillationAngle) * petal.oscillationDistance;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > height + 40) {
          petal.y = -40;
          petal.x = Math.random() * width;
        }
        if (petal.x > width + 40) {
          petal.x = -40;
        } else if (petal.x < -40) {
          petal.x = width + 40;
        }

        const img = images[petal.imageIndex];
        if (img && img.complete && img.naturalWidth > 0) {
          ctx.save();
          ctx.translate(petal.x, petal.y);
          ctx.rotate((petal.rotation * Math.PI) / 180);
          ctx.globalAlpha = petal.opacity;

          const aspect = img.naturalWidth / img.naturalHeight;
          const drawW = petal.size;
          const drawH = petal.size / aspect;

          ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-testid="falling-petals-canvas"
      className={`fixed inset-0 pointer-events-none z-10 select-none ${className}`}
    />
  );
}

export default FallingPetals;

