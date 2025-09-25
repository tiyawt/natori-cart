"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CartList from "@/components/CartList";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useCartStore } from "@/store/cartStore";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const setItems = useCartStore((s) => s.setItems);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products?limit=5", {
          cache: "no-store",
        });
        const data = await res.json();
        const normalized = data.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          image: item.image,
          rating: { rate: item.rating?.rate },
          qty: 1,
        }));
        if (alive) setItems(normalized); // seed ke Zustand
      } catch (e) {
        console.error("Terjadi error:", e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [setItems]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <ScaleLoader color="#ffffff" />
        </div>
      ) : (
        <div className="md:px-20">
          <CartList />
        </div>
      )}
    </>
  );
}
