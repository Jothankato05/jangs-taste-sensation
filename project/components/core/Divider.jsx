import React from "react";

/** Hairline divider, optionally with a centered caps label or fog accent. */
export function Divider({ label, accent, style }) {
  const line = { flex: 1, height: 1, background: accent ? "rgba(204,188,163,0.45)" : "var(--border-subtle)" };
  if (!label) return <div style={{ ...line, flex: "none", width: "100%", ...style }}></div>;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18, width: "100%", ...style }}>
      <div style={line}></div>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: "var(--weight-medium)", letterSpacing: "0.42em", textTransform: "uppercase", color: "var(--text-accent)", paddingLeft: "0.42em" }}>{label}</span>
      <div style={line}></div>
    </div>
  );
}
