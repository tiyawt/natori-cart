"use client";

import { Button } from "@/components/ui/button";
import { LuSquarePlus, LuSquareMinus } from "react-icons/lu";

export default function ButtonCounter({
  value,
  onInc,
  onDec,
  min = 0,
  max = Infinity,
}) {
  const canDec = value > min;
  const canInc = value < max;

  return (
    <div className="inline-flex items-center">
      <Button variant="outline" size="icon" onClick={onDec} disabled={!canDec}>
        <LuSquareMinus className="h-2 w-2" />
      </Button>

      <span className="mx-2 w-5 text-center select-none">{value}</span>

      <Button variant="outline" size="icon" onClick={onInc} disabled={!canInc}>
        <LuSquarePlus className="h-2 w-2" />
      </Button>
    </div>
  );
}
