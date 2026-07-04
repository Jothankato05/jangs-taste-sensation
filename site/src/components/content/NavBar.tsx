import type { CSSProperties } from "react";
import { Wordmark } from "../core/Wordmark";
import { Button } from "../core/Button";

interface NavBarProps {
  links?: string[];
  active?: string;
  onNavigate?: (link: string) => void;
  cta?: string;
  onCta?: () => void;
  fixed?: boolean;
  style?: CSSProperties;
}

/** Fixed glass navigation bar: wordmark left, caps links center, CTA right. */
export function NavBar({ links = [], active, onNavigate, cta = "Reserve", onCta, fixed = false, style }: NavBarProps) {
  return (
    <nav
      style={{
        position: fixed ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 var(--gutter)",
        height: 84,
        background: "var(--surface-glass)",
        backdropFilter: "blur(var(--blur-glass))",
        WebkitBackdropFilter: "blur(var(--blur-glass))",
        borderBottom: "1px solid var(--border-subtle)",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <Wordmark size="sm" tagline={false}></Wordmark>
      <div style={{ display: "flex", gap: 38 }}>
        {links.map((l) => (
          <a
            key={l}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(l);
            }}
            style={{
              fontSize: 11,
              fontWeight: "var(--weight-medium)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: active === l ? "var(--morning-fog)" : "var(--text-secondary)",
              borderBottom: `1px solid ${active === l ? "var(--morning-fog)" : "transparent"}`,
              paddingBottom: 4,
              transition: "all var(--duration-base) var(--ease-cinematic)",
            }}
          >
            {l}
          </a>
        ))}
      </div>
      <Button size="sm" variant="outline" onClick={onCta}>
        {cta}
      </Button>
    </nav>
  );
}
