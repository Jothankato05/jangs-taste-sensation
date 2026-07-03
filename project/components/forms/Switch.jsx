import React from "react";

/** Hairline toggle switch — fog track when on. */
export function Switch({ label, checked, onChange, style }) {
  return (
    <label
      onClick={() => onChange && onChange(!checked)}
      style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer", fontFamily: "var(--font-sans)", ...style }}
    >
      <span style={{
        width: 44, height: 24, borderRadius: 999, position: "relative",
        background: checked ? "var(--morning-fog)" : "transparent",
        border: `1px solid ${checked ? "var(--morning-fog)" : "var(--border-strong)"}`,
        transition: "all var(--duration-base) var(--ease-cinematic)",
      }}>
        <span style={{
          position: "absolute", top: 3, left: checked ? 23 : 3, width: 16, height: 16, borderRadius: "50%",
          background: checked ? "var(--black)" : "var(--text-secondary)",
          transition: "all var(--duration-base) var(--ease-cinematic)",
        }}></span>
      </span>
      {label && <span style={{ fontSize: 14, fontWeight: "var(--weight-light)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>{label}</span>}
    </label>
  );
}
