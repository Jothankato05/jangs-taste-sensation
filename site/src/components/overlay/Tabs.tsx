import type { CSSProperties } from "react";

interface TabsProps {
  tabs?: string[];
  active?: string;
  onChange?: (tab: string) => void;
  style?: CSSProperties;
}

/** Hairline caps tabs with fog underline indicator. */
export function Tabs({ tabs = [], active, onChange, style }: TabsProps) {
  return (
    <div style={{ display: "flex", gap: 34, borderBottom: "1px solid var(--border-subtle)", fontFamily: "var(--font-sans)", ...style }}>
      {tabs.map((t) => {
        const on = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange?.(t)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 2px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: "var(--weight-medium)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: on ? "var(--text-primary)" : "var(--text-tertiary)",
              boxShadow: on ? "inset 0 -1px 0 var(--morning-fog), 0 1px 0 var(--morning-fog)" : "none",
              transition: "color var(--duration-base) var(--ease-cinematic)",
            }}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
