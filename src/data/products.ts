export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    color: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Sofa Melon-260",
    image: "/image-1.png",
    price: 25000,
    category: "Sofa Set",
    description: "The Sofa is made of comfortable and best quality Fabric/Artificial leather. Best quality Super Soft Foam.",
    features: [
      "Frame & Floor Touch Material: Solid Mahogany Wood and New quality Plywood",
      "Lacquer: High-quality environment-friendly Sekan Ultra Violet (UV), Durable and Anti-Fungal lacquer",
      "Premium quality fabric upholstery",
      "High-density foam for maximum comfort"
    ],
    specifications: {
      material: "Solid Mahogany Wood, Premium Fabric",
      dimensions: "260cm x 160cm x 85cm",
      weight: "45 kg",
      color: "Blue"
    }
  },
  {
    id: 2,
    title: "Sofa Nottingham-243",
    image: "/image-2.png",
    price: 35000,
    category: "Sofa Set",
    description: "Modern L-shaped sofa with premium yellow fabric upholstery.",
    features: [
      "Premium quality fabric upholstery",
      "High-density foam cushioning",
      "Solid wooden frame",
      "Contemporary design"
    ],
    specifications: {
      material: "Premium Fabric, Solid Wood",
      dimensions: "243cm x 180cm x 85cm",
      weight: "55 kg",
      color: "Yellow"
    }
  },
  {
    id: 3,
    title: "Sofa Rio-330",
    image: "/image-3.png",
    price: 28000,
    category: "Sofa Set",
    description: "Elegant white sofa with wooden accents and comfortable cushioning.",
    features: [
      "Premium quality leather upholstery",
      "Solid wood frame and legs",
      "High-resilience foam",
      "Classic design"
    ],
    specifications: {
      material: "Leather, Solid Wood",
      dimensions: "330cm x 160cm x 90cm",
      weight: "50 kg",
      color: "White"
    }
  },
  {
    id: 4,
    title: "Modern L-shaped Sofa",
    image: "/image-4.png",
    price: 45000,
    category: "Sofa Set",
    description: "Contemporary L-shaped sofa perfect for modern living rooms.",
    features: [
      "Premium fabric upholstery",
      "High-density foam",
      "Solid wood frame",
      "Modular design"
    ],
    specifications: {
      material: "Premium Fabric, Solid Wood",
      dimensions: "300cm x 200cm x 85cm",
      weight: "65 kg",
      color: "Beige"
    }
  },
  {
    id: 5,
    title: "Sofa Chelif-334",
    image: "/image-5.png",
    price: 32000,
    category: "Sofa Set",
    description: "Comfortable armchair with premium green fabric upholstery.",
    features: [
      "Premium fabric upholstery",
      "High-density foam cushioning",
      "Solid wooden frame",
      "Classic design"
    ],
    specifications: {
      material: "Premium Fabric, Solid Wood",
      dimensions: "90cm x 85cm x 100cm",
      weight: "25 kg",
      color: "Green"
    }
  },
  {
    id: 6,
    title: "Velvet L Shaped Couch",
    image: "/image-6.png",
    price: 55000,
    category: "Sofa Set",
    description: "Luxurious velvet L-shaped couch with modern design.",
    features: [
      "Premium velvet upholstery",
      "High-density foam",
      "Solid wood frame",
      "Contemporary design"
    ],
    specifications: {
      material: "Velvet, Solid Wood",
      dimensions: "320cm x 190cm x 85cm",
      weight: "70 kg",
      color: "Navy Blue"
    }
  },
  {
    id: 7,
    title: "SOFA-CRISSCROSS",
    image: "/image-7.png",
    price: 22000,
    category: "Sofa Set",
    description: "Modern accent chair with unique crisscross design.",
    features: [
      "Premium fabric upholstery",
      "Ergonomic design",
      "Solid wood frame",
      "Decorative pattern"
    ],
    specifications: {
      material: "Premium Fabric, Solid Wood",
      dimensions: "80cm x 75cm x 90cm",
      weight: "20 kg",
      color: "Teal"
    }
  },
  {
    id: 8,
    title: "DOUBLE SOFA-POMPEI",
    image: "/image-8.png",
    price: 38000,
    category: "Sofa Set",
    description: "Stylish double sofa with premium leather upholstery.",
    features: [
      "Premium leather upholstery",
      "High-density foam",
      "Solid wood frame",
      "Modern design"
    ],
    specifications: {
      material: "Leather, Solid Wood",
      dimensions: "180cm x 90cm x 85cm",
      weight: "45 kg",
      color: "Tan"
    }
  }
];