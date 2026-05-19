export default function LoadingState() {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full table-fixed text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="w-[140px] px-4 py-3 text-center">
              شماره سفارش
            </th>

            <th className="w-[160px] px-4 py-3 text-center">
              مشتری
            </th>

            <th className="w-[140px] px-4 py-3 text-center">
              محصول
            </th>

            <th className="w-[60px] px-4 py-3 text-center">
              تعداد
            </th>

            <th className="w-[160px] px-4 py-3 text-center">
              مبلغ
            </th>

            <th className="w-[140px] px-4 py-3 text-center">
              وضعیت
            </th>

            <th className="w-[100px] px-4 py-3 text-center">
              تاریخ
            </th>

            <th className="w-[140px] px-4 py-3 text-center">
              عملیات
            </th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 10 }).map((_, row) => (
            <tr key={row} className="border-t">
              {Array.from({ length: 8 }).map((_, col) => (
                <td key={col} className="px-4 py-4">
                  <div className="h-7 animate-pulse rounded bg-gray-200" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}