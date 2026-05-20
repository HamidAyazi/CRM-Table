interface Props {
  pageSize: number;
  onChange: (value: number) => void;
}

export default function PageSizeInput({ pageSize, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span>نمایش</span>
      <input
        id="itemNumInput"
        type="number"
        min={1}
        max={20}
        value={pageSize}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-20 rounded-md border px-2 py-1 text-center"
      />
      <span>آیتم در هر صفحه</span>
    </div>
  );
}
