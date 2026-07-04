import { useEffect, type CSSProperties } from "react";

interface ToastProps {
  open: boolean;
  message: string;
  detail?: string;
  onClose?: () => void;
  duration?: number;
  style?: CSSProperties;
}

/** Bottom-corner glass toast; auto-dismisses. */
export function Toast({ open, message, detail, onClose, duration = 4000, style }: ToastProps) {
  useEffect(() => {
    if (!open || !duration) return;
    const t = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);
  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 120,
        transform: open ? "translateY(0)" : "translateY(16px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "all var(--duration-base) var(--ease-cinematic)",
        background: "var(--surface-glass)",
        backdropFilter: "blur(var(--blur-glass))",
        WebkitBackdropFilter: "blur(var(--blur-glass))",
        border: "1px solid var(--border-subtle)",
        borderLeft: "2px solid var(--morning-fog)",
        borderRadius: "2px 16px 2px 2px",
        padding: "16px 22px",
        minWidth: 260,
        fontFamily: "var(--font-sans)",
        boxShadow: "var(--shadow-card)",
        ...style,
      }}
    >
      <div style={{ fontSize: 11, fontWeight: "var(--weight-semibold)", letterSpacing: "0.22em", textTransform: "uppercase" }}>{message}</div>
      {detail && <div style={{ fontSize: 12, fontWeight: "var(--weight-light)", color: "var(--text-secondary)", marginTop: 5 }}>{detail}</div>}
    </div>
  );
}
