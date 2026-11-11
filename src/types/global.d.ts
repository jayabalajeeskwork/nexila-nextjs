export {};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, callback: (response: any) => void) => void;
    };
    NX_COMMENTS_API?: string;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
