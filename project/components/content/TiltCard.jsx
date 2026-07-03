import React from "react";

/** 3D perspective tilt card — the brand's cinematic depth primitive.
    Wraps any children; tilts toward the cursor with layered lift. */
export function TiltCard({ children, maxTilt = 7, lift = true, signatureCorner = true, style }) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState({ x: 0, y: 0, on: false });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ x: -py * maxTilt * 2, y: px * maxTilt * 2, on: true });
  };
  return (
    <div style={{ perspective: "var(--depth-perspective)", ...style }}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setT({ x: 0, y: 0, on: false })}
        style={{
          transform: `rotateX(${t.x}deg) rotateY(${t.y}deg) ${t.on && lift ? "translateZ(24px)" : ""}`,
          transformStyle: "preserve-3d",
          transition: t.on ? "transform 120ms linear" : "transform var(--duration-slow) var(--ease-cinematic)",
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: signatureCorner ? "2px 28px 2px 2px" : "2px",
          boxShadow: t.on ? "var(--shadow-float)" : "var(--shadow-card)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
