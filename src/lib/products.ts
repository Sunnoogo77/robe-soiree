// Static seed catalogue. Replace with a Supabase query once the `products`
// table is provisioned.

export type ProductKind =
  | "dress"
  | "dress-long"
  | "dress-short"
  | "bag"
  | "scarf"
  | "jewel"
  | "shoe";

export type Product = {
  id: string;
  slug: string;
  name: string;
  sub: string;
  category: "robes" | "sacs" | "accessoires";
  collection: string;
  description: string;
  composition: string;
  care: string;
  price: string;
  priceNum: number;
  badge: string | null;
  tone: string;
  bg: string;
  kind: ProductKind;
  sizes: string[];
};

const BASE = {
  description:
    "Pièce confectionnée à Paris, dans notre atelier rue d'Aboukir. Coupe étudiée, finitions main, étoffes choisies chez les tisseurs italiens et lyonnais.",
  composition: "100% soie sablée. Doublure : 100% cupro. Tissu tissé à Côme, Italie.",
  care:
    "Nettoyage à sec uniquement. Conservez la pièce dans la housse fournie.",
};

export const PRODUCTS: Product[] = [
  { id: "p1",  slug: "robe-lior",      name: "Robe Lior",      sub: "Soie sablée, noir",          price: "1 290 €", priceNum: 1290, badge: "Nouveau",         tone: "#1D1D1F", bg: "#EFEAE0", kind: "dress",       sizes: ["34","36","38","40"],         category: "robes",        collection: "Édition",         ...BASE },
  { id: "p2",  slug: "robe-calliope",  name: "Robe Calliope",  sub: "Crêpe, ivoire",              price: "1 450 €", priceNum: 1450, badge: "Édition limitée", tone: "#E5DFD0", bg: "#FAF7F0", kind: "dress",       sizes: ["36","38","40"],              category: "robes",        collection: "Capsule Soirée",  ...BASE },
  { id: "p3",  slug: "robe-octavie",   name: "Robe Octavie",   sub: "Velours, prune profond",     price: "1 690 €", priceNum: 1690, badge: null,              tone: "#3A1E2C", bg: "#EDE3E1", kind: "dress",       sizes: ["34","36","38","40","42"],    category: "robes",        collection: "Édition",         ...BASE },
  { id: "p4",  slug: "robe-aurelie",   name: "Robe Aurélie",   sub: "Mousseline, écru",           price: "1 380 €", priceNum: 1380, badge: "Nouveau",         tone: "#E8E0CF", bg: "#F5F0E5", kind: "dress-short", sizes: ["34","36","38"],              category: "robes",        collection: "Édition",         ...BASE },
  { id: "p5",  slug: "robe-margaux",   name: "Robe Margaux",   sub: "Sergé de laine, noir",       price: "1 180 €", priceNum: 1180, badge: null,              tone: "#1D1D1F", bg: "#F5F5F7", kind: "dress-short", sizes: ["34","36","38","40"],         category: "robes",        collection: "Édition",         ...BASE },
  { id: "p6",  slug: "robe-iliane",    name: "Robe Iliane",    sub: "Satin duchesse, bleu nuit",  price: "1 520 €", priceNum: 1520, badge: null,              tone: "#1B2540", bg: "#E8E9EE", kind: "dress",       sizes: ["36","38","40"],              category: "robes",        collection: "Capsule Soirée",  ...BASE },
  { id: "p7",  slug: "robe-soraya",    name: "Robe Soraya",    sub: "Tulle brodé, champagne",     price: "1 850 €", priceNum: 1850, badge: "Édition limitée", tone: "#C9A96E", bg: "#F4ECDB", kind: "dress",       sizes: ["36","38"],                   category: "robes",        collection: "Capsule Soirée",  ...BASE },
  { id: "p8",  slug: "robe-olympe",    name: "Robe Olympe",    sub: "Crêpe Georgette, écru",      price: "1 220 €", priceNum: 1220, badge: null,              tone: "#EDE5D5", bg: "#F5F0E5", kind: "dress-short", sizes: ["34","36","38","40"],         category: "robes",        collection: "Édition",         ...BASE },
  { id: "p9",  slug: "sac-aurore",     name: "Sac Aurore",     sub: "Cuir grainé, fauve",         price: "980 €",   priceNum:  980, badge: null,              tone: "#A78866", bg: "#F2EAE0", kind: "bag",         sizes: [],                            category: "sacs",         collection: "Édition",         ...BASE, composition: "Cuir de veau pleine fleur, doublure cupro." },
  { id: "p10", slug: "sac-emilie",     name: "Sac Émilie",     sub: "Cuir lisse, noir",           price: "1 120 €", priceNum: 1120, badge: "Stock limité",    tone: "#1D1D1F", bg: "#F5F5F7", kind: "bag",         sizes: [],                            category: "sacs",         collection: "Édition",         ...BASE, composition: "Cuir de veau lisse, doublure cupro." },
  { id: "p11", slug: "carre-aria",     name: "Carré Aria",     sub: "Soie, ton champagne",        price: "320 €",   priceNum:  320, badge: null,              tone: "#C9A96E", bg: "#F4ECDB", kind: "scarf",       sizes: [],                            category: "accessoires",  collection: "Édition",         ...BASE, composition: "100% soie, sergé." },
  { id: "p12", slug: "bracelet-iris",  name: "Bracelet Iris",  sub: "Or jaune 18 ct",             price: "780 €",   priceNum:  780, badge: null,              tone: "#D8B26A", bg: "#F4ECDB", kind: "jewel",       sizes: [],                            category: "accessoires",  collection: "Édition",         ...BASE, composition: "Or jaune 18 carats, poids 6 g." },
];

export function findProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
