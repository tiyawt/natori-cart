export default function StarRating({ rating = 0, total = 5, size = 20 }) {
  const r = Math.max(0, Math.min(total, Number(rating) || 0));
  const pct = (r / total) * 100;

  return (
    <div
      className="flex items-center gap-2"
      style={{ fontSize: size, lineHeight: 1 }}
    >
      <div className="relative inline-block leading-none">
        <div className="dark:text-gray-700 text-gray-300 select-none">{"★".repeat(total)}</div>
        <div
          className="absolute inset-0 overflow-hidden text-black dark:text-white select-none pointer-events-none"
          style={{ width: `${pct}%` }}
        >
          {"★".repeat(total)}
        </div>
      </div>

      <span
        className="text-gray-500"
        style={{ fontSize: Math.max(12, Math.round(size * 0.6)) }}
      >
        {r.toFixed(1)}
      </span>
    </div>
  );
}
