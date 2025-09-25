"use client";

import { useCartStore } from "@/store/cartStore";
import CartItem from "./CartItem";

export default function CartList() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());

  if (!items.length) return <div className="p-6">Cart kosong 🥲</div>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">CART</h1>
      <div className="md:grid grid-cols-12 hidden border-b pb-2 font-medium text-sm text-gray-600 dark:text-white">
        <span className="col-span-6">Added Items</span>
        <span className="col-span-2">Category</span>
        <span className="col-span-1">Price</span>
        <span className="col-span-2">Quantity</span>
        <span className="col-span-1">Total</span>
      </div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="mt-8 max-w-md ml-auto">
        <div className="py-3 flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-white text-xl">
            Subtotal:
          </span>
          <span className="text-2xl font-bold">
            ${total.toLocaleString("us-US")}
          </span>
        </div>

        <button className="mt-3 w-full bg-black dark:bg-white dark:text-black font-semibold cursor-pointer hover:bg-white hover:border-2 hover:text-black hover:dark:bg-black hover:dark:text-white text-white py-4 text-xs tracking-widest mb-10">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}
