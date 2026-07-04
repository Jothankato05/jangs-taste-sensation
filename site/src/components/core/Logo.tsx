import type { CSSProperties } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  style?: CSSProperties;
}

const sizes: Record<NonNullable<LogoProps["size"]>, number> = { sm: 44, md: 64, lg: 96 };

/** Brand mark — the client's own gold emblem. */
export function Logo({ size = "md", style }: LogoProps) {
  const d = sizes[size];
  return (
    <img
      src="/images/logo.jpg"
      alt="Jang's Taste Sensation"
      style={{
        width: d,
        height: d,
        borderRadius: "50%",
        objectFit: "cover",
        flexShrink: 0,
        ...style,
      }}
    />
  );
}
