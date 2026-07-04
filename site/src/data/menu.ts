export type Category = "Intercontinental" | "African" | "Snacks" | "Smoothies" | "Side Dishes" | "Soups & Sauces" | "Salads" | "Pasta";

export interface Dish {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  atmosphere: "warm" | "cool" | "smoke";
  badge?: string;
  category: Category;
}

const atmospheres: Dish["atmosphere"][] = ["warm", "cool", "smoke"];

// Stock photos for the signature dishes, sourced from Pexels (free for commercial use, no attribution required).
const signatureImages: Record<string, string> = {
  "Singapore Noodles": "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
  "Butter Chicken": "https://images.pexels.com/photos/29685054/pexels-photo-29685054.jpeg",
  "Chef Jang Special (Potato & Chicken)": "https://images.pexels.com/photos/12077982/pexels-photo-12077982.jpeg",
};

function build(category: Category, names: string[], signature: string[] = []): Dish[] {
  return names.map((name, i) => ({
    name,
    category,
    atmosphere: atmospheres[i % atmospheres.length],
    badge: signature.includes(name) ? "Signature" : undefined,
    image: signatureImages[name],
  }));
}

export const dishes: Dish[] = [
  ...build(
    "Intercontinental",
    [
      "Baked Potato With Veg",
      "Baked Potato & Fish",
      "Oriental Fried Rice And Seafood",
      "Oriental Fried Rice",
      "Fried Rice",
      "Coconut Fried Rice",
      "Beef Fried Rice",
      "Chinese Fried Rice",
      "Chinese Fried Rice & Seafoods",
      "Egg Fried Rice & Chicken Soup",
      "Chicken Fried Rice",
      "Basil Fried Rice",
      "Chicken & Shrimp Mixed Rice",
      "Crunchy Noodles",
      "Steamed Rice & Thai Sauce",
      "Pineapple Rice",
      "Sweet Potato & Carrots Nest",
      "Jambalaya Rice",
      "Mashed Potato And Grilled Chicken",
      "Grilled Shrimp And Spicy Mango Lime Coulis",
      "Singapore Noodles",
      "Butter Chicken",
      "Indonesian Nasi Goreng",
      "Thai Basil Fried Rice",
    ],
    ["Singapore Noodles", "Butter Chicken"]
  ),
  ...build("African", [
    "Jollof Rice",
    "Moi Moi",
    "Gizzard & Dodo",
    "Yam Porridge With Fish & Shrimps",
    "Beans & Dodo",
    "Beans Porridge",
    "Boiled Yam & Egg Sauce",
    "Chips & Egg",
    "Asun",
    "White Rice & Stew",
    "Noodles & Egg",
    "White Rice, Beans & Stew",
    "Potato Casserole",
  ]),
  ...build("Snacks", [
    "Shawarma",
    "Beef Burger",
    "Chicken Burger",
    "Sandwich",
    "Meat Pie",
    "Doughnut",
    "Corn Dog",
    "Samosa / Spring Roll",
    "Vegetarian Pizza",
    "Chicken Italia Pizza",
    "Pepperoni Pizza",
    "Savoury Beef Pizza",
  ]),
  ...build("Smoothies", ["Avocado Smoothie", "Mango Lassi"]),
  ...build("Side Dishes", ["Crispy Chicken Wings", "Plantain Cup", "Honey Glazed Wings"]),
  ...build(
    "Soups & Sauces",
    [
      "Mushroom Cream Soup",
      "Shredded Chicken Sauce",
      "Shredded Beef Sauce",
      "Chef Jang Special (Potato & Chicken)",
      "Chicken Cream Soup",
      "Catfish Pepper Soup",
      "Goat Meat Pepper Soup",
      "Chicken Pepper Soup",
      "Hot & Spicy Sauce",
      "Sweet & Sour Sauce",
    ],
    ["Chef Jang Special (Potato & Chicken)"]
  ),
  ...build("Salads", [
    "Chicken Salad",
    "Avocado Salad",
    "Coleslaw",
    "Green Salad",
    "American Sweet Corn Salad",
    "Caesar Salad",
    "Garden Salad",
    "Stir Fried Veggies",
  ]),
  ...build("Pasta", ["Alfredo Linguine", "Penne Arrabbiata", "Spaghetti Bolognaise", "Special Spaghetti", "Creamy Pasta"]),
];

export const categories: Category[] = ["Intercontinental", "African", "Snacks", "Side Dishes", "Soups & Sauces", "Salads", "Pasta", "Smoothies"];
