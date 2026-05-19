import type { SortOption } from "../types/orderTypes";
interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortSelect({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value as SortOption)
      }
      className="rounded-md border px-3 py-2 text-sm outline-none"
    >
      <option value="date_desc">جدیدترین</option>
      <option value="date_asc">قدیمی‌ترین</option>
    </select>
  );
}