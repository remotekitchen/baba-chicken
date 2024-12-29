export interface MenuItem {
  name: string;
  price: number;
  description: string;
  category?: "starters" | "mains" | "breads" | "sides";
  image?: string;
}

export interface Testimonial {
  name: string;
  content: string;
}

export interface GalleryItem {
  image: string;
  title: string;
}
