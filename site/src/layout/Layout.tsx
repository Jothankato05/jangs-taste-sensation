import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../components/content/NavBar";
import { Footer } from "../components/content/Footer";

const NAV_LINKS = ["Home", "Menu", "Chef", "Reserve"];

const ROUTES: Record<string, string> = {
  Home: "/",
  Menu: "/menu",
  Chef: "/chef",
  Reserve: "/reserve",
};

function activeLinkFor(pathname: string) {
  const entry = Object.entries(ROUTES).find(([, path]) => path === pathname);
  return entry?.[0];
}

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar
        fixed
        links={NAV_LINKS}
        active={activeLinkFor(location.pathname)}
        onNavigate={(l) => navigate(ROUTES[l])}
        cta="Book Now"
        onCta={() => navigate("/reserve")}
      />
      <main style={{ flex: 1, paddingTop: 84 }}>
        <Outlet />
      </main>
      <Footer
        note="African and intercontinental dishes, from Chef Jang's kitchen."
        columns={[
          { title: "Visit", links: ["Menu", "Reserve", "Private Dining"] },
          {
            title: "Contact",
            links: [
              { label: "Email", href: "mailto:Jangstastesensation@gmail.com" },
              { label: "Instagram", href: "https://instagram.com/Jangs_taste_sensation" },
            ],
          },
        ]}
      />
    </div>
  );
}
