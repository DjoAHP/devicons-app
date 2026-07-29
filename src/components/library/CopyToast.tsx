interface CopyToastProps {
  message: string | null;
}

/** Témoin discret confirmant une copie. */
export function CopyToast({ message }: CopyToastProps) {
  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
    >
      <div
        className={`glass-panel rounded-full px-4 py-2 text-xs font-medium text-foreground transition-all duration-200 ${
          message ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {message ?? ""}
      </div>
    </div>
  );
}
