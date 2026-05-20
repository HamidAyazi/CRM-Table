import PageSizeInput from "./PageSizeInput";

interface Props {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

function getPages(current: number, total: number) {
  const delta = 1;
  const pages: (number | "...")[] = [];

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  pages.push(1);

  if (left > 2) {
    pages.push("...");
  }

  for (let i = left; i <= right; i++) {
    pages.push(i);
  }

  if (right < total - 1) {
    pages.push("...");
  }

  if (total > 1) {
    pages.push(total);
  }

  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = getPages(currentPage, totalPages);

  return (
    <>
      <div className="mt-6 flex items-center justify-center gap-2">
        {pages.map((page, idx) =>
          page === "..." ? (
            <span key={`dots-${idx}`} className="px-2 text-gray-400">
              ...
            </span>
          ) : (
            <button
              aria-label="change page"
              key={page}
              onClick={() => onPageChange(page)}
              className={`rounded-md px-3 py-1 border text-sm outline-none ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-white"
              }`}>
              {page.toLocaleString("fa-IR")}
            </button>
          ),
        )}
      </div>
      <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-600">
        <div>مجموع {totalItems.toLocaleString("fa-IR")} سفارش</div>
        <PageSizeInput pageSize={pageSize} onChange={onPageSizeChange} />
      </div>
    </>
  );
}
