// Clothes Products
export const clothes = [
  {
    id: 1,
    name: "Satin Blouse",
    price: 45,
    category: "Clothes",
    description: "Elegant satin blouse perfect for formal and casual wear."
  },
  {
    id: 2,
    name: "High-Waist Jeans",
    price: 60,
    category: "Clothes",
    description: "Comfortable high-waist jeans with a modern slim fit."
  },
  {
    id: 3,
    name: "Oversized Blazer",
    price: 85,
    category: "Clothes",
    description: "Stylish oversized blazer for a chic layered look."
  }
];


// Cosmetics Products
export const cosmetics = [
  {
    id: 4,
    name: "Matte Lipstick",
    price: 20,
    category: "Cosmetics",
    description: "Long-lasting matte lipstick with rich pigmentation."
  },
  {
    id: 5,
    name: "Vitamin C Serum",
    price: 35,
    category: "Cosmetics",
    description: "Brightening serum for glowing and healthy skin."
  },
  {
    id: 6,
    name: "Waterproof Mascara",
    price: 18,
    category: "Cosmetics",
    description: "Smudge-proof mascara for bold and defined lashes."
  }
];



export const allProducts = [...clothes, ...cosmetics];
