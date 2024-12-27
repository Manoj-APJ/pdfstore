import { create } from 'zustand';
import { CartItem } from '../types';

interface StoreState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (pdfId: string) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.pdf.id === item.pdf.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.pdf.id === item.pdf.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
  removeFromCart: (pdfId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.pdf.id !== pdfId),
    })),
  clearCart: () => set({ cart: [] }),
}));