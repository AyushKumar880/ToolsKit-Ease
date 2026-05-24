import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
