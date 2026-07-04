import { useState, type CSSProperties } from "react";
import { Badge } from "../core/Badge";

interface DishCardProps {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  badge?: string;
  atmosphere?: "warm" | "cool" | "smoke";
  style?: CSSProperties;
}

const atmospheres: Record<string, string> = {
  warm: "radial-gradient(120% 100% at 65% 25%, #4a3a28 0%, #201812 55%, #050505 100%)",
  cool: "radial-gradient(120% 100% at 65% 25%, #3b4a5a 0%, #16202b 55%, #050505 100%)",
  smoke: "radial-gradient(120% 100% at 50% 10%, #3a3a3d 0%, #1a1a1d 55%, #050505 100%)",
};

/** Menu dish card: media area (image or CSS atmosphere placeholder), caps name, ingredient line, price. */
export function DishCard({ name, description, price, image, badge, atmosphere = "warm", style }: DishCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ fontFamily: "var(--font-sans)", cursor: "pointer", ...style }}>
      <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", borderRadius: "2px 28px 2px 2px", border: "1px solid var(--border-subtle)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: image ? `url(${image}) center/cover` : atmospheres[atmosphere],
            transform: hover ? "scale(1.06)" : "scale(1)",
            filter: hover ? "brightness(1)" : "brightness(0.85)",
            transition: "all var(--duration-slow) var(--ease-cinematic)",
          }}
        ></div>
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }}></div>
        {badge && (
          <div style={{ position: "absolute", top: 14, left: 14 }}>
            <Badge>{badge}</Badge>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginTop: 16, borderTop: "1px solid var(--border-subtle)", paddingTop: 12 }}>
        <h3
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: hover ? "var(--morning-fog)" : "var(--text-primary)",
            transition: "color var(--duration-base)",
          }}
        >
          {name}
        </h3>
        {price != null && <span style={{ fontSize: 14, color: "var(--text-accent)", fontWeight: "var(--weight-medium)" }}>{price}</span>}
      </div>
      {description && <p style={{ margin: "6px 0 0", fontSize: 13, fontWeight: "var(--weight-light)", color: "var(--text-tertiary)", lineHeight: 1.5 }}>{description}</p>}
    </article>
  );
}
