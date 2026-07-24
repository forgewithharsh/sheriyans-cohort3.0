import { Loader2, AlertTriangle } from "lucide-react";

export function LoadingState({ label = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-white/50">
      <Loader2 size={28} className="animate-spin text-brand" />
      <p className="text-sm">{label}</p>
    </div>
  );
}

export function ErrorState({ message = "Something went wrong." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-red-500/30 bg-red-950/20 py-16 text-center text-red-300">
      <AlertTriangle size={26} />
      <p className="max-w-sm text-sm">{message}</p>
    </div>
  );
}
