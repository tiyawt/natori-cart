"use client";

import Link from "next/link";
import { LuSearch, LuHeart, LuUser, LuShoppingBag } from "react-icons/lu";
import { ModeToggle } from "./mode-toggle";

function Navbar({ cartCount = 0 }) {
  return (
    <header
      className="
        sticky top-0 z-40
        border-b border-zinc-200 dark:border-zinc-800
        bg-white/70 dark:bg-zinc-950/40
        backdrop-blur
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between md:py-4 min-h-12 md:min-h-20 gap-2 md:gap-0 p-4">
          {/* LEFT */}
          <div className="flex md:w-1/3 items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <div className="inline-flex items-center justify-center gap-1 hover:opacity-80">
              <ModeToggle />
            </div>
          </div>

          {/* BRAND */}
          <div className="order-1 w-full md:order-none md:w-1/3 flex items-center justify-center">
            <Link
              href="/"
              aria-label="Home"
              className="tracking-[0.4em] text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100"
            >
              N A T O R I
            </Link>
          </div>

          {/* ICONS */}
          <div className="order-2 w-full md:w-1/3 flex items-center justify-center md:justify-end gap-5 text-zinc-700 dark:text-zinc-100">
            <button aria-label="Search" className="hover:opacity-80">
              <LuSearch className="text-[20px]" />
            </button>
            <button aria-label="Wishlist" className="hover:opacity-80">
              <LuHeart className="text-[20px]" />
            </button>
            <button aria-label="Account" className="hover:opacity-80">
              <LuUser className="text-[20px]" />
            </button>
            <button aria-label="Cart" className="relative hover:opacity-80">
              <LuShoppingBag className="text-[20px]" />
              <span className="absolute -right-3 -top-2 min-w-5 h-5 px-1 rounded-full text-[10px] font-semibold flex items-center justify-center bg-zinc-900 text-white dark:text-zinc-900 dark:bg-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
