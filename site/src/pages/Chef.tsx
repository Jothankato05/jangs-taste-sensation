import { useNavigate } from "react-router-dom";
import { SectionHeading } from "../components/core/SectionHeading";
import { Divider } from "../components/core/Divider";
import { Badge } from "../components/core/Badge";
import { Button } from "../components/core/Button";
import { TiltCard } from "../components/content/TiltCard";

const quoteAtmosphere = "radial-gradient(90% 100% at 50% 100%, rgba(174,196,220,0.06) 0%, rgba(5,5,5,0) 60%)";

const career = [
  { role: "Head Chef", place: "City Birds Group of Company, NAF Valley, Asokoro, Abuja" },
  { role: "Head Chef", place: "Enayi Hotels & Suites, Zarmaganda, Rayfield, Plateau State" },
  { role: "Sous Chef", place: "Swiss Luxury Executive Hotel" },
  { role: "General Manager / Head Chef", place: "Bima Restaurant, Gombe" },
  { role: "Assistant Head Chef", place: "JW Cuisine" },
];

export function Chef() {
  const navigate = useNavigate();

  return (
    <div>
      <section
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--space-9) var(--gutter)",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <TiltCard>
          <div style={{ aspectRatio: "4 / 5", position: "relative" }}>
            <img src="/images/chef-jang.jpg" alt="Chef Jang Victor Chundusu" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%" }} />
            <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }} />
            <div style={{ position: "absolute", bottom: 20, left: 20 }}>
              <Badge tone="fog">Chef &amp; Owner</Badge>
            </div>
          </div>
        </TiltCard>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
          <SectionHeading
            align="left"
            kicker="The Chef"
            title="Jang Victor Chundusu"
            subtitle="Born in Barkin Ladi, Plateau State. Trained in catering at J.W.'s Cuisine, Rayfield, Jos — and shaped since by kitchens across Nigeria, from hotel lines to head chef."
          />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Badge tone="neutral">Plateau State, Nigeria</Badge>
            <Badge tone="neutral">God-Fearing</Badge>
            <Badge tone="neutral">Creative</Badge>
            <Badge tone="neutral">Hardworking</Badge>
          </div>
        </div>
      </section>

      <section style={{ position: "relative", padding: "var(--space-9) var(--gutter)", background: quoteAtmosphere, backgroundColor: "var(--ink-900)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28, alignItems: "center", textAlign: "center" }}>
          <Divider label="Philosophy" accent />
          <p
            style={{
              margin: 0,
              fontSize: "var(--text-display)",
              fontWeight: "var(--weight-light)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "0.01em",
              color: "var(--text-primary)",
            }}
          >
            Integrity. Commitment. Determination. Dedication.
          </p>
          <span style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>— Chef Jang</span>
        </div>
      </section>

      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-9) var(--gutter)" }}>
        <SectionHeading kicker="Career" title="Kitchens Along The Way" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 48 }}>
          {career.map((c, i) => (
            <div key={c.place}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 8, padding: "22px 0" }}>
                <span style={{ fontSize: 13, letterSpacing: "0.12em", color: "var(--text-accent)", textTransform: "uppercase", minWidth: 220 }}>{c.role}</span>
                <span style={{ fontSize: 16, fontWeight: "var(--weight-light)", color: "var(--text-primary)", letterSpacing: "0.02em" }}>{c.place}</span>
              </div>
              {i < career.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "0 var(--gutter) var(--space-9)" }}>
        <Button size="lg" variant="primary" onClick={() => navigate("/reserve")}>
          Reserve a Table
        </Button>
      </section>
    </div>
  );
}
