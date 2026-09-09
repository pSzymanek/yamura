type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: Fbq;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const pixelId = "1796015508487964";

function ensureFbq(): Fbq {
  if (window.fbq) return window.fbq;

  const fbq = (function queueMetaPixelCommand(...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(arguments);
    }
  }) as Fbq;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  return fbq;
}

export function applyMetaPixelConsent(allowed: boolean) {
  if (!allowed || document.querySelector(`[data-meta-pixel="${pixelId}"]`)) return;

  const fbq = ensureFbq();
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  script.dataset.metaPixel = pixelId;
  document.head.append(script);

  fbq("init", pixelId);
  fbq("track", "PageView");
}
