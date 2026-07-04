import type { CSSProperties } from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  size?: "hero" | "display" | "title";
  style?: CSSProperties;
}

/** Kicker + display headline + optional subline — the standard section opener. */
export function SectionHeading({ kicker, title, subtitle, align = "center", size = "display", style }: SectionHeadingProps) {
  const fs = size === "hero" ? "var(--text-hero)" : size === "title" ? "var(--text-title)" : "var(--text-display)";
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        textAlign: align,
        alignItems: align === "center" ? "center" : "flex-start",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      {kicker && (
        <span
          style={{
            fontSize: 11,
            fontWeight: "var(--weight-medium)",
            letterSpacing: "var(--tracking-kicker)",
            textTransform: "uppercase",
            color: "var(--text-accent)",
            paddingLeft: align === "center" ? "0.42em" : 0,
          }}
        >
          {kicker}
        </span>
      )}
      <h2
        style={{
          margin: 0,
          fontSize: fs,
          fontWeight: "var(--weight-bold)",
          letterSpacing: "var(--tracking-display)",
          lineHeight: "var(--leading-display)",
          textTransform: "uppercase",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ margin: 0, maxWidth: 520, fontSize: "var(--text-body)", fontWeight: "var(--weight-light)", lineHeight: "var(--leading-body)", color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
