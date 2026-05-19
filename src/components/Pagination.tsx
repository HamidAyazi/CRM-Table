interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`rounded-md px-3 py-1 border text-sm ${
              currentPage === page
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
}