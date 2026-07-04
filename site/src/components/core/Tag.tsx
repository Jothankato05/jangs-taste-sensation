import { useState, type CSSProperties, type ReactNode } from "react";

interface TagProps {
  selected?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

/** Selectable filter tag (menu categories, dietary filters). */
export function Tag({ selected, children, onClick, style }: TagProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 34,
        padding: "0 18px",
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: "var(--weight-medium)",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        cursor: "pointer",
        background: selected ? "var(--white)" : "transparent",
        color: selected ? "var(--black)" : hover ? "var(--text-primary)" : "var(--text-secondary)",
        border: `1px solid ${selected ? "var(--white)" : hover ? "var(--border-strong)" : "var(--border-subtle)"}`,
        borderRadius: "var(--radius-pill)",
        transition: "all var(--duration-base) var(--ease-cinematic)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
