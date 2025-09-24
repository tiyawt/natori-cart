import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// bikin hook global store
export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [], 
      hasHydrated: false,
      setItems: (items) => set({ items }),
      // tambah item baru / tambah qty kalau udah ada
      add: (item, qty = 1) =>
        set((state) => {
          const exist = state.items.find((i) => i.id === item.id);
          if (exist) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, qty: i.qty + qty } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, qty }] };
        }),

      // increment quantity
      inc: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          ),
        })),

      // decrement quantity (hapus item kalau qty 0)
      dec: (id) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
            .filter((i) => i.qty > 0),
        })),

      // hapus 1 item langsung
      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      // hapus semua item
      clear: () => set({ items: [] }),

      // selector → jumlah item di cart
      count: () => get().items.reduce((n, i) => n + i.qty, 0),

      // selector → total harga
      total: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),

      // flag untuk hydration Next.js
      _setHydrated: (v) => set({ hasHydrated: v }),
    }),
    {
      name: "cart-v1", // nama key di localStorage
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => state && state._setHydrated(true),
    }
  )
);
