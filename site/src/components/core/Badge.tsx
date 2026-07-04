import type { CSSProperties, ReactNode } from "react";

interface BadgeProps {
  tone?: "fog" | "water" | "neutral" | "solid";
  children?: ReactNode;
  style?: CSSProperties;
}

/** Wide-tracked caps status chip. */
export function Badge({ tone = "fog", children, style }: BadgeProps) {
  const tones: Record<string, CSSProperties> = {
    fog: { color: "var(--morning-fog)", borderColor: "rgba(204,188,163,0.4)" },
    water: { color: "var(--lake-water)", borderColor: "rgba(174,196,220,0.4)" },
    neutral: { color: "var(--text-secondary)", borderColor: "var(--border-subtle)" },
    solid: { color: "var(--black)", background: "var(--morning-fog)", borderColor: "var(--morning-fog)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 26,
        padding: "0 12px",
        fontFamily: "var(--font-sans)",
        fontSize: 10,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        border: "1px solid",
        borderRadius: "2px 10px 2px 2px",
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
