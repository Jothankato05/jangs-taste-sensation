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

// Stock photos sourced from Pexels (free for commercial use, no attribution required).
// Coverage is best-effort: many of these dishes (especially West African ones, and
// custom/composite names) have no genuinely matching photo on Pexels, so a fair number
// are approximate stand-ins rather than exact matches — see the flagged list in the PR/commit
// notes. Dishes with no reasonably close match are left without an image (falls back to the
// CSS atmosphere placeholder) rather than force a misleading photo.
const dishImages: Record<string, string> = {
  // Intercontinental
  "Baked Potato With Veg": "https://images.pexels.com/photos/840099/pexels-photo-840099.jpeg",
  "Baked Potato & Fish": "https://images.pexels.com/photos/15186039/pexels-photo-15186039.jpeg",
  "Oriental Fried Rice And Seafood": "https://images.pexels.com/photos/14072789/pexels-photo-14072789.jpeg",
  "Oriental Fried Rice": "https://images.pexels.com/photos/17910326/pexels-photo-17910326.jpeg",
  "Fried Rice": "https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg",
  "Beef Fried Rice": "https://images.pexels.com/photos/2067418/pexels-photo-2067418.jpeg",
  "Chinese Fried Rice": "https://images.pexels.com/photos/3727196/pexels-photo-3727196.jpeg",
  "Egg Fried Rice & Chicken Soup": "https://images.pexels.com/photos/8688803/pexels-photo-8688803.jpeg",
  "Chicken Fried Rice": "https://images.pexels.com/photos/6249394/pexels-photo-6249394.jpeg",
  "Basil Fried Rice": "https://images.pexels.com/photos/12100417/pexels-photo-12100417.jpeg",
  "Chicken & Shrimp Mixed Rice": "https://images.pexels.com/photos/30120281/pexels-photo-30120281.jpeg",
  "Crunchy Noodles": "https://images.pexels.com/photos/7138913/pexels-photo-7138913.jpeg",
  "Steamed Rice & Thai Sauce": "https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg",
  "Pineapple Rice": "https://images.pexels.com/photos/17424346/pexels-photo-17424346.jpeg",
  "Sweet Potato & Carrots Nest": "https://images.pexels.com/photos/27588117/pexels-photo-27588117.jpeg",
  "Jambalaya Rice": "https://images.pexels.com/photos/10522937/pexels-photo-10522937.jpeg",
  "Mashed Potato And Grilled Chicken": "https://images.pexels.com/photos/15532964/pexels-photo-15532964.jpeg",
  "Grilled Shrimp And Spicy Mango Lime Coulis": "https://images.pexels.com/photos/23645834/pexels-photo-23645834.jpeg",
  "Singapore Noodles": "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
  "Butter Chicken": "https://images.pexels.com/photos/29685054/pexels-photo-29685054.jpeg",
  "Indonesian Nasi Goreng": "https://images.pexels.com/photos/30604609/pexels-photo-30604609.jpeg",

  // African
  "Jollof Rice": "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
  "Moi Moi": "https://images.pexels.com/photos/5966153/pexels-photo-5966153.jpeg",
  "Gizzard & Dodo": "https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg",
  "Yam Porridge With Fish & Shrimps": "https://images.pexels.com/photos/33406/pexels-photo-33406.jpeg",
  "Beans Porridge": "https://images.pexels.com/photos/5863607/pexels-photo-5863607.jpeg",
  "Boiled Yam & Egg Sauce": "https://images.pexels.com/photos/1833337/pexels-photo-1833337.jpeg",
  "Chips & Egg": "https://images.pexels.com/photos/2960569/pexels-photo-2960569.jpeg",
  "Asun": "https://images.pexels.com/photos/1639558/pexels-photo-1639558.jpeg",
  "White Rice & Stew": "https://images.pexels.com/photos/12916867/pexels-photo-12916867.jpeg",
  "Noodles & Egg": "https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg",
  "White Rice, Beans & Stew": "https://images.pexels.com/photos/13063294/pexels-photo-13063294.jpeg",
  "Potato Casserole": "https://images.pexels.com/photos/9862286/pexels-photo-9862286.jpeg",

  // Snacks
  "Shawarma": "https://images.pexels.com/photos/28897047/pexels-photo-28897047.jpeg",
  "Beef Burger": "https://images.pexels.com/photos/3826273/pexels-photo-3826273.jpeg",
  "Chicken Burger": "https://images.pexels.com/photos/11354334/pexels-photo-11354334.jpeg",
  "Sandwich": "https://images.pexels.com/photos/17942170/pexels-photo-17942170.jpeg",
  "Meat Pie": "https://images.pexels.com/photos/4748403/pexels-photo-4748403.jpeg",
  "Doughnut": "https://images.pexels.com/photos/928475/pexels-photo-928475.jpeg",
  "Corn Dog": "https://images.pexels.com/photos/13237564/pexels-photo-13237564.jpeg",
  "Samosa / Spring Roll": "https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg",
  "Vegetarian Pizza": "https://images.pexels.com/photos/7172067/pexels-photo-7172067.jpeg",
  "Chicken Italia Pizza": "https://images.pexels.com/photos/992062/pexels-photo-992062.jpeg",
  "Pepperoni Pizza": "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg",
  "Savoury Beef Pizza": "https://images.pexels.com/photos/27582711/pexels-photo-27582711.jpeg",

  // Smoothies
  "Avocado Smoothie": "https://images.pexels.com/photos/9518477/pexels-photo-9518477.jpeg",
  "Mango Lassi": "https://images.pexels.com/photos/14509267/pexels-photo-14509267.jpeg",

  // Side Dishes
  "Crispy Chicken Wings": "https://images.pexels.com/photos/32067295/pexels-photo-32067295.jpeg",
  "Plantain Cup": "https://images.pexels.com/photos/12362305/pexels-photo-12362305.jpeg",
  "Honey Glazed Wings": "https://images.pexels.com/photos/8862753/pexels-photo-8862753.jpeg",

  // Soups & Sauces
  "Mushroom Cream Soup": "https://images.pexels.com/photos/4103375/pexels-photo-4103375.jpeg",
  "Shredded Chicken Sauce": "https://images.pexels.com/photos/784634/pexels-photo-784634.jpeg",
  "Shredded Beef Sauce": "https://images.pexels.com/photos/8739109/pexels-photo-8739109.jpeg",
  "Chef Jang Special (Potato & Chicken)": "https://images.pexels.com/photos/12077982/pexels-photo-12077982.jpeg",
  "Catfish Pepper Soup": "https://images.pexels.com/photos/1707270/pexels-photo-1707270.jpeg",
  "Goat Meat Pepper Soup": "https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg",
  "Chicken Pepper Soup": "https://images.pexels.com/photos/27098505/pexels-photo-27098505.jpeg",
  "Hot & Spicy Sauce": "https://images.pexels.com/photos/5737365/pexels-photo-5737365.jpeg",
  "Sweet & Sour Sauce": "https://images.pexels.com/photos/29653191/pexels-photo-29653191.jpeg",

  // Salads
  "Chicken Salad": "https://images.pexels.com/photos/28647073/pexels-photo-28647073.jpeg",
  "Avocado Salad": "https://images.pexels.com/photos/29233927/pexels-photo-29233927.jpeg",
  "Coleslaw": "https://images.pexels.com/photos/35793/pexels-photo-35793.jpeg",
  "Green Salad": "https://images.pexels.com/photos/6428245/pexels-photo-6428245.jpeg",
  "American Sweet Corn Salad": "https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg",
  "Caesar Salad": "https://images.pexels.com/photos/12557608/pexels-photo-12557608.jpeg",
  "Garden Salad": "https://images.pexels.com/photos/3743537/pexels-photo-3743537.jpeg",
  "Stir Fried Veggies": "https://images.pexels.com/photos/11213759/pexels-photo-11213759.jpeg",

  // Pasta
  "Alfredo Linguine": "https://images.pexels.com/photos/11220208/pexels-photo-11220208.jpeg",
  "Penne Arrabbiata": "https://images.pexels.com/photos/7837671/pexels-photo-7837671.jpeg",
  "Spaghetti Bolognaise": "https://images.pexels.com/photos/28575312/pexels-photo-28575312.jpeg",
  "Special Spaghetti": "https://images.pexels.com/photos/9617397/pexels-photo-9617397.jpeg",
  "Creamy Pasta": "https://images.pexels.com/photos/10802305/pexels-photo-10802305.jpeg",
};

function build(category: Category, names: string[], signature: string[] = []): Dish[] {
  return names.map((name, i) => ({
    name,
    category,
    atmosphere: atmospheres[i % atmospheres.length],
    badge: signature.includes(name) ? "Signature" : undefined,
    image: dishImages[name],
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
