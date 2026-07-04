import { useNavigate } from "react-router-dom";
import { SectionHeading } from "../components/core/SectionHeading";
import { Divider } from "../components/core/Divider";
import { Badge } from "../components/core/Badge";
import { Button } from "../components/core/Button";
import { TiltCard } from "../components/content/TiltCard";

const portraitAtmosphere = "radial-gradient(120% 100% at 35% 15%, #3a2c1c 0%, #1a1510 55%, #050505 100%)";
const quoteAtmosphere = "radial-gradient(90% 100% at 50% 100%, rgba(174,196,220,0.06) 0%, rgba(5,5,5,0) 60%)";

const milestones = [
  { year: "2011", label: "Line Cook, Seoul" },
  { year: "2015", label: "Sous Chef, Copenhagen" },
  { year: "2018", label: "Head Chef, New York" },
  { year: "2014", label: "Jang's Taste Sensation Opens" },
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
          <div style={{ aspectRatio: "4 / 5", background: portraitAtmosphere, position: "relative" }}>
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
            title="Chef Jang"
            subtitle="Trained on open flame before anything else. No shortcuts, no plating tricks — one fire, one counter, twelve seats a night."
          />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Badge tone="neutral">15 Years</Badge>
            <Badge tone="neutral">Wood Fire</Badge>
            <Badge tone="neutral">Twelve Seats</Badge>
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
            Fire doesn't lie. It shows you exactly what the ingredient is.
          </p>
          <span style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>— Chef Jang</span>
        </div>
      </section>

      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-9) var(--gutter)" }}>
        <SectionHeading kicker="Journey" title="Twelve Years On Fire" />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 48 }}>
          {milestones.map((m, i) => (
            <div key={m.label}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 32, padding: "22px 0" }}>
                <span style={{ fontSize: 13, letterSpacing: "0.18em", color: "var(--text-accent)", minWidth: 56 }}>{m.year}</span>
                <span style={{ fontSize: 16, fontWeight: "var(--weight-light)", color: "var(--text-primary)", letterSpacing: "0.02em" }}>{m.label}</span>
              </div>
              {i < milestones.length - 1 && <Divider />}
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
