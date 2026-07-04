import { useState, type CSSProperties } from "react";

interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: string[];
  placeholder?: string;
  style?: CSSProperties;
}

/** Underlined native select styled to match Input. */
export function Select({ label, value, onChange, options = [], placeholder, style }: SelectProps) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--font-sans)", ...style }}>
      {label && (
        <span style={{ display: "block", fontSize: 10, fontWeight: "var(--weight-medium)", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 10 }}>
          {label}
        </span>
      )}
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%",
            appearance: "none",
            background: "transparent",
            border: "none",
            outline: "none",
            borderBottom: `1px solid ${focus ? "var(--morning-fog)" : "var(--border-subtle)"}`,
            padding: "10px 24px 12px 0",
            color: value ? "var(--text-primary)" : "var(--text-tertiary)",
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: "var(--weight-light)",
            letterSpacing: "0.04em",
            transition: "border-color var(--duration-base) var(--ease-cinematic)",
            cursor: "pointer",
          }}
        >
          {placeholder && (
            <option value="" disabled style={{ color: "#000" }}>
              {placeholder}
            </option>
          )}
          {options.map((o) => (
            <option key={o} value={o} style={{ color: "#000" }}>
              {o}
            </option>
          ))}
        </select>
        <span style={{ position: "absolute", right: 2, top: "50%", transform: "translateY(-60%)", pointerEvents: "none", color: "var(--text-secondary)", fontSize: 10 }}>▾</span>
      </div>
    </label>
  );
}
