import type { CSSProperties } from "react";
import { Logo } from "../core/Logo";
import { Divider } from "../core/Divider";

interface FooterColumn {
  title: string;
  links: string[];
}

interface FooterProps {
  columns?: FooterColumn[];
  note?: string;
  style?: CSSProperties;
}

/** Near-black site footer: wordmark, link columns, hairline dividers, legal line. */
export function Footer({ columns = [], note, style }: FooterProps) {
  return (
    <footer style={{ background: "var(--ink-950)", padding: "72px var(--gutter) 40px", fontFamily: "var(--font-sans)", ...style }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 48, flexWrap: "wrap", marginBottom: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 300 }}>
          <Logo size="md" />
          {note && <p style={{ margin: 0, fontSize: 13, fontWeight: "var(--weight-light)", color: "var(--text-tertiary)", lineHeight: 1.6 }}>{note}</p>}
        </div>
        <div style={{ display: "flex", gap: 72, flexWrap: "wrap" }}>
          {columns.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 10, fontWeight: "var(--weight-semibold)", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--text-accent)" }}>{col.title}</span>
              {col.links.map((l) => (
                <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13, fontWeight: "var(--weight-light)", color: "var(--text-secondary)", textDecoration: "none", letterSpacing: "0.06em" }}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Divider></Divider>
      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 22, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>
        <span>© 2026 Jang's Taste Sensation</span>
        <span>Seared. Served.</span>
      </div>
    </footer>
  );
}
