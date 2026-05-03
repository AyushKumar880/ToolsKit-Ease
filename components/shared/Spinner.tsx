export function Spinner() {
  return (
    <div role="status" aria-label="Loading" className="flex items-center justify-center">
      <div className="h-8 w-8 border-4 border-neutral-200 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
}
