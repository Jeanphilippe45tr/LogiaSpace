export interface Service {
  id: number;
  icon: string;
  name: string;
  shortDescription?: string;
  description: string;
  delayTime: number;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  social: {
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  delayTime: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  comment: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  currency: string;
  duration: string;
  description: string;
  features: string[];
  non_features: string[];
  delayTime: number;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}
