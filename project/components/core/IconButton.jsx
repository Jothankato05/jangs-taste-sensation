import React from "react";

/** Square hairline icon button. Pass a Lucide icon node as children. */
export function IconButton({ children, size = "md", active, disabled, onClick, label, style }) {
  const d = { sm: 34, md: 44, lg: 54 }[size] || 44;
  const [hover, setHover] = React.useState(false);
  return (
    <button
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d, display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: active ? "var(--surface-card-hover)" : "transparent",
        color: active ? "var(--morning-fog)" : hover ? "var(--text-primary)" : "var(--text-secondary)",
        border: `1px solid ${hover || active ? "var(--border-strong)" : "var(--border-subtle)"}`,
        borderRadius: "2px 12px 2px 2px", cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.35 : 1,
        transition: "all var(--duration-base) var(--ease-cinematic)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
