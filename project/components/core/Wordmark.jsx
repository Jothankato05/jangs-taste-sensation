import React from "react";

/** Typed brand lockup — Jang's has no drawn logo; this IS the mark. */
export function Wordmark({ size = "md", tagline = true, style }) {
  const s = { sm: [16, 7], md: [26, 9], lg: [40, 11] }[size] || [26, 9];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: s[0] * 0.3, textAlign: "center", fontFamily: "var(--font-sans)", color: "var(--text-primary)", ...style }}>
      <span style={{ fontSize: s[0], fontWeight: "var(--weight-bold)", letterSpacing: "0.3em", paddingLeft: "0.3em", textTransform: "uppercase", lineHeight: 1 }}>
        Jang's
      </span>
      {tagline && (
        <span style={{ fontSize: s[1], fontWeight: "var(--weight-regular)", letterSpacing: "0.5em", paddingLeft: "0.5em", textTransform: "uppercase", color: "var(--text-secondary)", lineHeight: 1 }}>
          Taste · Sensation
        </span>
      )}
    </div>
  );
}
