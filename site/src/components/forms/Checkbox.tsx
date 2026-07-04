import type { CSSProperties } from "react";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: CSSProperties;
}

/** Square hairline checkbox with fog check. */
export function Checkbox({ label, checked, onChange, style }: CheckboxProps) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer", fontFamily: "var(--font-sans)", ...style }}>
      <span
        onClick={() => onChange?.(!checked)}
        style={{
          width: 20,
          height: 20,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${checked ? "var(--morning-fog)" : "var(--border-strong)"}`,
          background: checked ? "var(--morning-fog)" : "transparent",
          borderRadius: "1px 6px 1px 1px",
          transition: "all var(--duration-fast) var(--ease-standard)",
        }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </span>
      {label && <span style={{ fontSize: 14, fontWeight: "var(--weight-light)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>{label}</span>}
    </label>
  );
}
