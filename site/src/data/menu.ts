export interface Dish {
  name: string;
  description: string;
  price: string;
  atmosphere: "warm" | "cool" | "smoke";
  badge?: string;
  category: "Small Plates" | "Fire" | "Mains" | "Dessert";
}

export const dishes: Dish[] = [
  {
    name: "Charred Octopus",
    description: "gochujang glaze, smoked leek, sesame ash",
    price: "24",
    atmosphere: "smoke",
    badge: "Signature",
    category: "Small Plates",
  },
  {
    name: "Ember Scallop",
    description: "brown butter, yuzu, charred citrus",
    price: "22",
    atmosphere: "warm",
    category: "Small Plates",
  },
  {
    name: "Smoked Egg",
    description: "soy cured yolk, chili oil, rice cracker",
    price: "14",
    atmosphere: "smoke",
    category: "Small Plates",
  },
  {
    name: "Fire Short Rib",
    description: "forty-eight hour braise, black garlic, ash salt",
    price: "48",
    atmosphere: "warm",
    badge: "Signature",
    category: "Fire",
  },
  {
    name: "Whole Branzino",
    description: "open flame, calamansi, herb oil",
    price: "42",
    atmosphere: "cool",
    category: "Fire",
  },
  {
    name: "Lava Rock Wagyu",
    description: "table-side sear, ponzu, scallion",
    price: "68",
    atmosphere: "warm",
    badge: "For Two",
    category: "Fire",
  },
  {
    name: "Jang's Bibim",
    description: "twelve-hour rice, seasonal root, fire chili",
    price: "32",
    atmosphere: "warm",
    category: "Mains",
  },
  {
    name: "Charcoal Noodle",
    description: "smoked broth, soft egg, pressed nori",
    price: "28",
    atmosphere: "smoke",
    category: "Mains",
  },
  {
    name: "Ash Roasted Duck",
    description: "black vinegar, burnt orange, scallion oil",
    price: "44",
    atmosphere: "warm",
    category: "Mains",
  },
  {
    name: "Smoked Miso Custard",
    description: "burnt honey, sesame brittle",
    price: "16",
    atmosphere: "cool",
    category: "Dessert",
  },
  {
    name: "Charred Pear",
    description: "brown butter caramel, toasted grain ice",
    price: "17",
    atmosphere: "warm",
    category: "Dessert",
  },
  {
    name: "Ember Chocolate",
    description: "smoked cacao, sea salt, olive oil",
    price: "18",
    atmosphere: "smoke",
    badge: "Signature",
    category: "Dessert",
  },
];

export const categories: Dish["category"][] = ["Small Plates", "Fire", "Mains", "Dessert"];
