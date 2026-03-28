declare global {
  interface Window {
    fbq: (action: string, event: string, data?: Record<string, unknown>, options?: Record<string, unknown>) => void;
    _fbq: unknown;
  }
}

function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function sendCapiEvent(payload: Record<string, unknown>) {
  const send = () => {
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(send, { timeout: 5000 });
  } else {
    setTimeout(send, 3000);
  }
}

export function trackPageView() {
  const eventId = generateEventId();

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView', {}, { eventID: eventId });
  }

  sendCapiEvent({
    event_name: 'PageView',
    event_id: eventId,
  });
}

export function trackInitiateCheckout() {
  const eventId = generateEventId();

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', { currency: 'IDR', value: 99000 }, { eventID: eventId });
  }

  sendCapiEvent({
    event_name: 'InitiateCheckout',
    event_id: eventId,
    custom_data: {
      currency: 'IDR',
      value: 99000,
    },
  });
}
