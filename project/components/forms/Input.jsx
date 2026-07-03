import React from "react";

const fieldLabel = { display: "block", fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: "var(--weight-medium)", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 10 };

/** Underlined text field — hairline that turns Morning Fog on focus. */
export function Input({ label, value, onChange, placeholder, type = "text", error, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--font-sans)", ...style }}>
      {label && <span style={fieldLabel}>{label}</span>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%", background: "transparent", border: "none", outline: "none",
          borderBottom: `1px solid ${error ? "#c96d5a" : focus ? "var(--morning-fog)" : "var(--border-subtle)"}`,
          padding: "10px 0 12px", color: "var(--text-primary)", fontFamily: "var(--font-sans)",
          fontSize: 16, fontWeight: "var(--weight-light)", letterSpacing: "0.04em",
          transition: "border-color var(--duration-base) var(--ease-cinematic)",
        }}
      />
      {error && <span style={{ display: "block", marginTop: 8, fontSize: 12, color: "#c96d5a", letterSpacing: "0.04em" }}>{error}</span>}
    </label>
  );
}
