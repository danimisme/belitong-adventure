export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
};

export interface PackageType {
  id: number;
  category: string;
  subCategory: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  price: number;
  pricePack: "person" | "group" | string;
  imgUrl: string;
  imgBannerUrl?: string;
  imgGalleryUrls: string[];
  duration: string;
  maxGuests: number;
  avability: string;
  itinerary?: ItineraryDay[];
  included?: string[];
  notIncluded?: string[];
  importantInfo?: string[];
};