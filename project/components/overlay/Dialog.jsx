import React from "react";
import { IconButton } from "../core/IconButton.jsx";

/** Glass modal dialog with kicker + caps title. */
export function Dialog({ open, kicker, title, children, onClose, width = 480, style }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "absolute", inset: 0, zIndex: 100, display: "grid", placeItems: "center", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width, maxWidth: "calc(100% - 48px)", padding: "36px 40px",
          background: "var(--surface-glass)", backdropFilter: "blur(var(--blur-glass))",
          WebkitBackdropFilter: "blur(var(--blur-glass))",
          border: "1px solid var(--border-subtle)", borderRadius: "2px 28px 2px 2px",
          boxShadow: "var(--shadow-float)", fontFamily: "var(--font-sans)", position: "relative",
          ...style,
        }}
      >
        <div style={{ position: "absolute", top: 16, right: 16 }}>
          <IconButton size="sm" label="Close" onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </IconButton>
        </div>
        {kicker && <div style={{ fontSize: 10, fontWeight: "var(--weight-medium)", letterSpacing: "0.42em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 12 }}>{kicker}</div>}
        {title && <h2 style={{ margin: "0 0 18px", fontSize: 24, fontWeight: "var(--weight-bold)", letterSpacing: "0.02em", textTransform: "uppercase", lineHeight: 1.15 }}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
