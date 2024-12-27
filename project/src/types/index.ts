export interface PDF {
  id: string;
  title: string;
  description: string;
  price: number;
  cover_image: string;
  file_url: string;
  created_at: string;
  category: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
}

export interface CartItem {
  pdf: PDF;
  quantity: number;
}