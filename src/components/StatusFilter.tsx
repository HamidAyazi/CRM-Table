import type { OrderStatus } from "../types/orderTypes";

interface Props {
  value: OrderStatus | "all";
  onChange: (value: OrderStatus | "all") => void;
}

export default function StatusFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value as OrderStatus | "all")
      }
      className="rounded-md border px-3 py-2 text-sm"
    >
      <option value="all">همه وضعیت‌ها</option>
      <option value="pending">در انتظار</option>
      <option value="processing">در حال پردازش</option>
      <option value="completed">تکمیل شده</option>
      <option value="cancelled">لغو شده</option>
    </select>
  );
}