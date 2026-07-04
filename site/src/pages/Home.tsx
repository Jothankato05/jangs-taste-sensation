import { useNavigate } from "react-router-dom";
import { Flame, UtensilsCrossed, MapPin } from "lucide-react";
import { Button } from "../components/core/Button";
import { SectionHeading } from "../components/core/SectionHeading";
import { Divider } from "../components/core/Divider";
import { Badge } from "../components/core/Badge";
import { TiltCard } from "../components/content/TiltCard";
import { DishCard } from "../components/content/DishCard";
import { dishes } from "../data/menu";

const heroAtmosphere = "radial-gradient(140% 100% at 50% 20%, #2a2015 0%, #14100b 45%, #050505 100%)";
const chefAtmosphere = "radial-gradient(120% 100% at 30% 20%, #3a2c1c 0%, #1a1510 55%, #050505 100%)";

const signatureDishes = dishes.filter((d) => d.badge === "Signature").slice(0, 3);

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 84px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: heroAtmosphere,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(60% 50% at 50% 100%, rgba(204,188,163,0.08) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-full)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "var(--container-max)",
            padding: "0 var(--gutter)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            textAlign: "center",
          }}
        >
          <SectionHeading kicker="Jang's Taste Sensation" title="Seared. Served." size="hero" subtitle="Your table is waiting. Twelve seats. One fire." />
          <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }}>
            <Button size="lg" variant="primary" onClick={() => navigate("/reserve")}>
              Reserve a Table
            </Button>
            <Button size="lg" variant="outline" icon={<UtensilsCrossed size={16} strokeWidth={1.5} />} onClick={() => navigate("/menu")}>
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-9) var(--gutter)" }}>
        <SectionHeading kicker="The Menu" title="Signature Dishes" subtitle="Ingredient-led plates, built around fire, smoke and ash." />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
            marginTop: 56,
          }}
        >
          {signatureDishes.map((dish, i) =>
            i === 0 ? (
              <TiltCard key={dish.name}>
                <div style={{ padding: 20 }}>
                  <DishCard {...dish} />
                </div>
              </TiltCard>
            ) : (
              <DishCard key={dish.name} {...dish} />
            )
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
          <Button variant="ghost" onClick={() => navigate("/menu")}>
            See Full Menu
          </Button>
        </div>
      </section>

      {/* Chef teaser */}
      <section style={{ background: "var(--ink-900)", padding: "var(--space-9) 0" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 var(--gutter)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <TiltCard>
            <div style={{ aspectRatio: "4 / 5", background: chefAtmosphere, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                <Badge tone="fog">Est. 2014</Badge>
              </div>
            </div>
          </TiltCard>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
            <SectionHeading align="left" kicker="The Chef" title="Fire Is The Ingredient" subtitle="Chef Jang trained on open flame before anything else. Twelve years later, the fire still leads every plate." />
            <Button variant="outline" onClick={() => navigate("/chef")}>
              Meet The Chef
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation band */}
      <section
        style={{
          position: "relative",
          padding: "var(--space-9) var(--gutter)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          background: "radial-gradient(80% 100% at 50% 0%, rgba(204,188,163,0.06) 0%, rgba(5,5,5,0) 60%)",
        }}
      >
        <Flame size={28} strokeWidth={1.25} color="var(--morning-fog)" />
        <SectionHeading kicker="Visit" title="Your Table Is Waiting" subtitle="Twelve seats. One counter. One fire. Reservations open six weeks out." />
        <Button size="lg" variant="accent" onClick={() => navigate("/reserve")}>
          Reserve Now
        </Button>
        <Divider style={{ maxWidth: 480, marginTop: 24 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-tertiary)", fontSize: 12, letterSpacing: "0.12em" }}>
          <MapPin size={14} strokeWidth={1.5} />
          <span>412 Ember Row, Lower District</span>
        </div>
      </section>
    </div>
  );
}
