import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 5000,
        style: {
          background: 'hsl(var(--secondary))',
          color: 'hsl(var(--secondary-foreground))',
          border: '1px solid hsl(var(--border))',
        },
        success: {
          icon: '✅',
          style: {
            borderLeft: '3px solid #10b981',
          },
        },
        error: {
          icon: '❌',
          style: {
            borderLeft: '3px solid #ef4444',
          },
        },
      }}
    />
  );
}
