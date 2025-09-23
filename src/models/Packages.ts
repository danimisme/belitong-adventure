export type PackageType = {
  id: number;
  category: "jage-bumi" | "jage-laut";
  subCategory: "adventure" | "conservation" | "education" | "nature";
  title: string;
  description: string;
  price: number;
  pricePack: string;
  imgUrl: string;
  duration: number;
};
