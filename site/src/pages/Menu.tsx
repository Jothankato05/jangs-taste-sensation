import { useMemo, useState } from "react";
import { SectionHeading } from "../components/core/SectionHeading";
import { Tag } from "../components/core/Tag";
import { DishCard } from "../components/content/DishCard";
import { categories, dishes, type Dish } from "../data/menu";

const menuHeroAtmosphere = "radial-gradient(120% 100% at 50% 15%, #241c14 0%, #120e0a 55%, #050505 100%)";

export function Menu() {
  const [filter, setFilter] = useState<Dish["category"] | "All">("All");

  const visible = useMemo(() => (filter === "All" ? dishes : dishes.filter((d) => d.category === filter)), [filter]);

  return (
    <div>
      <section
        style={{
          padding: "var(--space-9) var(--gutter) var(--space-7)",
          textAlign: "center",
          background: menuHeroAtmosphere,
        }}
      >
        <SectionHeading kicker="Jang's Taste Sensation" title="The Menu" subtitle="African and intercontinental dishes, from Chef Jang's kitchen." />
      </section>

      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-7) var(--gutter) var(--space-9)" }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 56 }}>
          <Tag selected={filter === "All"} onClick={() => setFilter("All")}>
            All
          </Tag>
          {categories.map((c) => (
            <Tag key={c} selected={filter === c} onClick={() => setFilter(c)}>
              {c}
            </Tag>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {visible.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
      </section>
    </div>
  );
}
