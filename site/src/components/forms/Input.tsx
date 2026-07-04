import { useState, type CSSProperties } from "react";

const fieldLabel: CSSProperties = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: 10,
  fontWeight: "var(--weight-medium)",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "var(--text-secondary)",
  marginBottom: 10,
};

interface InputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "date" | "time";
  error?: string;
  required?: boolean;
  style?: CSSProperties;
}

/** Underlined text field — hairline that turns Morning Fog on focus. */
export function Input({ label, value, onChange, placeholder, type = "text", error, required, style }: InputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--font-sans)", ...style }}>
      {label && <span style={fieldLabel}>{label}</span>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          outline: "none",
          borderBottom: `1px solid ${error ? "#c96d5a" : focus ? "var(--morning-fog)" : "var(--border-subtle)"}`,
          padding: "10px 0 12px",
          color: "var(--text-primary)",
          fontFamily: "var(--font-sans)",
          fontSize: 16,
          fontWeight: "var(--weight-light)",
          letterSpacing: "0.04em",
          transition: "border-color var(--duration-base) var(--ease-cinematic)",
        }}
      />
      {error && <span style={{ display: "block", marginTop: 8, fontSize: 12, color: "#c96d5a", letterSpacing: "0.04em" }}>{error}</span>}
    </label>
  );
}
