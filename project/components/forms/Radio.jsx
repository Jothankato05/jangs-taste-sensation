import React from "react";

/** Circular radio with fog dot. */
export function Radio({ label, checked, onChange, style }) {
  return (
    <label
      onClick={() => onChange && onChange(true)}
      style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer", fontFamily: "var(--font-sans)", ...style }}
    >
      <span style={{
        width: 20, height: 20, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${checked ? "var(--morning-fog)" : "var(--border-strong)"}`,
        transition: "all var(--duration-fast) var(--ease-standard)",
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--morning-fog)", transform: checked ? "scale(1)" : "scale(0)", transition: "transform var(--duration-fast) var(--ease-standard)" }}></span>
      </span>
      {label && <span style={{ fontSize: 14, fontWeight: "var(--weight-light)", color: checked ? "var(--text-primary)" : "var(--text-secondary)", letterSpacing: "0.04em" }}>{label}</span>}
    </label>
  );
}
