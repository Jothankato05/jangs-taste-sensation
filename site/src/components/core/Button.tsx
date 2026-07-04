import { useState, type CSSProperties, type ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  style?: CSSProperties;
}

/** Primary action. Uppercase, wide-tracked, sharp with signature top-right curve. */
export function Button({ variant = "primary", size = "md", children, icon, disabled, type = "button", onClick, style }: ButtonProps) {
  const [h, fs, px] = { sm: [38, 11, 18], md: [48, 12, 26], lg: [58, 13, 34] }[size];
  const variants: Record<string, CSSProperties> = {
    primary: { background: "var(--action-primary-bg)", color: "var(--action-primary-fg)", border: "1px solid var(--white)" },
    outline: { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-strong)" },
    ghost: { background: "transparent", color: "var(--text-secondary)", border: "1px solid transparent" },
    accent: { background: "var(--morning-fog)", color: "var(--black)", border: "1px solid var(--morning-fog)" },
  };
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        height: h,
        padding: `0 ${px}px`,
        fontFamily: "var(--font-sans)",
        fontSize: fs,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        cursor: disabled ? "not-allowed" : "pointer",
        borderRadius: "2px 16px 2px 2px",
        transition: "all var(--duration-base) var(--ease-cinematic)",
        opacity: disabled ? 0.35 : 1,
        transform: press ? "scale(0.98)" : "none",
        filter: hover && !disabled ? "brightness(1.1)" : "none",
        ...variants[variant],
        ...(hover && !disabled && variant === "outline" ? { borderColor: "var(--morning-fog)", color: "var(--morning-fog)" } : {}),
        ...(hover && !disabled && variant === "ghost" ? { color: "var(--text-primary)" } : {}),
        ...style,
      }}
    >
      {children}
      {icon ? <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span> : null}
    </button>
  );
}
