interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <div className="w-full md:flex-1">
      <input
        id="searchInput"
        aria-label="Search orders"
        type="text"
        value={value}
        placeholder="جستجو بر اساس نام یا شماره سفارش..."
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm outline-none"
      />
    </div>
  );
}
