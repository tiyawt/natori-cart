"use client";

import StarRating from "./StarRating";
import Counter from "@/components/Counter";

const currency = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n ?? 0
  );

export default function CartItem({ item }) {
  const { id, title, price, image, category, qty, rating } = item;
  const safeRating = Number(rating?.rate ?? 0);
  const lineTotal = price * qty;

  return (
    <>
      {/* DESKTOP */}
      <div className="md:grid hidden grid-cols-12 items-center border-b py-4 gap-4">
        <div className="col-span-6 flex gap-4">
          <div className="relative h-28 w-28 flex-none grid place-items-center rounded border bg-white">
            <img
              src={image}
              alt={`${title} image`}
              className="absolute max-h-full max-w-full object-contain p-2"
            />
          </div>

          <div>
            <h2 className="font-semibold text-base">{title}</h2>
            {typeof StarRating !== "undefined" && (
              <StarRating rating={safeRating} />
            )}
          </div>
        </div>

        <div className="col-span-2 text-sm capitalize">{category}</div>
        <div className="col-span-1 text-sm">{currency(price)}</div>

        <div className="col-span-2">
          {/* Counter update langsung ke store */}
          <Counter id={id} qty={qty} />
        </div>

        <div className="col-span-1 text-right font-semibold">
          {currency(lineTotal)}
        </div>
      </div>

      {/* MOBILE */}
      <div className="grid md:hidden grid-cols-12 items-center border-b py-4 gap-4">
        <div className="col-span-6 flex gap-4">
          <div className="relative h-28 w-28 flex-none grid place-items-center rounded border bg-white">
            <img
              src={image}
              alt={`${title} image`}
              className="absolute max-h-full max-w-full object-contain p-2"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold text-base">{title}</h2>
            <div className="flex flex-row gap-14">
              <div>
                {typeof StarRating !== "undefined" && (
                  <StarRating rating={safeRating} />
                )}
                <div className="col-span-1 text-base mt-4">
                  {currency(price)}
                </div>
              </div>

              <div className="col-span-2 flex justify-center items-center">
                <Counter id={id} qty={qty} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 text-sm capitalize">{category}</div>

        <div className="col-span-1 text-right font-semibold">
          {currency(lineTotal)}
        </div>
      </div>
    </>
  );
}
