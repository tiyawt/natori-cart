"use client";
import { useCartStore } from "@/store/cartStore";

export default function Counter({ id, qty }) {
  const inc = useCartStore((s) => s.inc);
  const dec = useCartStore((s) => s.dec);

  return <ButtonCounter value={qty} onDec={()=> {dec(id)}} onInc={() => inc(id)} min={1} />;
}