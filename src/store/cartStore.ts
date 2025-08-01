import { create } from 'zustand';

export interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  updateQuantity: (id: number, size: string, color: string, delta: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => {
    const existing = state.cartItems.find((i) =>
      i.id === item.id && i.size === item.size && i.color === item.color
    );
    if (existing) {
      return {
        cartItems: state.cartItems.map((i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        ),
      };
    }
    return { cartItems: [...state.cartItems, item] };
  }),
  removeFromCart: (id, size, color) => set((state) => ({
    cartItems: state.cartItems.filter((item) =>
      !(item.id === id && item.size === size && item.color === color)
    ),
  })),
  updateQuantity: (id, size, color, delta) => set((state) => ({
    cartItems: state.cartItems.map((item) =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ),
  })),
}));
