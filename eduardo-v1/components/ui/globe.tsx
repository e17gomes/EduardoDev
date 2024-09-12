'use client'
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from 'react-spring';

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 5.70,
        theta: -0.15,
        dark: 1,
        diffuse: 3,
        mapSamples:11000,
        mapBrightness: 12,
        baseColor: [0.7, 0.7, 0.7],
        markerColor: [122 / 255, 216 / 255, 230 / 255],
        glowColor: [39 / 255, 39 / 255, 39 / 255], // Cor cinza escuro (#272727)
        markers:  [{ location: [-23.5505, -46.6333], size: 0.1 }] as any[],
        onRender: (state:any) => {
          state.phi = r.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = '0.9';
        }
      });

      return () => {
        globe.destroy();
        window.removeEventListener('resize', onResize);
      };
    }
  }, [r]);

  return (
    <div style={{
      width: '100%',
      maxWidth: 600,
      aspectRatio: 1,
      margin: 'auto',
      position: 'relative',
      zIndex:'0', 
    }}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          if (canvasRef.current) {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null && canvasRef.current) {
            const delta = e.clientX - (pointerInteracting.current as number);
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0] && canvasRef.current) {
            const delta = e.touches[0].clientX - (pointerInteracting.current as number);
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 1s ease',
        }}
      />
    </div>
  );
}

export default Globe;
