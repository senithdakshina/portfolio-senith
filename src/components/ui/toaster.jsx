// src/components/ui/toaster.jsx
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props} className="pointer-events-auto">
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>

          {action}
          <ToastClose aria-label="Close" />
        </Toast>
      ))}

      {/* Make the viewport fixed and very high z-index so toasts are always visible */}
      <ToastViewport className="fixed top-4 right-4 z-[9999] flex flex-col gap-4 max-w-sm" />
    </ToastProvider>
  );
}
