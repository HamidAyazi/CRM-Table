
interface Props {
  message?: string;
}

export default function ErrorState({
  message = "خطایی رخ داده است",
}: Props) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 py-10 text-center text-red-600">
      {message}
    </div>
  );
}