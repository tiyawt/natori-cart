"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import ButtonCounter from "./ButtonCounter";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function Counter({ id, qty, min = 0 }) {
  const inc = useCartStore((s) => s.inc);
  const dec = useCartStore((s) => s.dec);
  const remove = useCartStore((s) => s.remove);

  const [showConfirm, setShowConfirm] = useState(false);

  const handleDec = () => {
    if (qty === 1) {
      setShowConfirm(true);
    } else {
      dec(id);
    }
  };

  return (
    <>
      <ButtonCounter
        value={qty}
        min={min}
        onInc={() => inc(id)}
        onDec={handleDec}
      />

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Apa anda yakin akan menghapus produk ini dari keranjang?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowConfirm(false)}>
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                remove(id);
                setShowConfirm(false);
              }}
            >
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
