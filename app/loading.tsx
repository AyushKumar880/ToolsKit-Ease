import { Spinner } from "@/components/shared/Spinner";

export default function AppLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Spinner />
    </div>
  );
}
