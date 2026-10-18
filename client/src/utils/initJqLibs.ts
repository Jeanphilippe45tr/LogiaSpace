/* Shared jQuery library initialization for the original template plugins
   (WOW.js, CounterUp, Owl Carousel). Called from React effects after paint. */

declare global {
  interface Window {
    WOW?: new () => { init: () => void };
    jQuery?: JQueryStatic;
  }
}

interface JQueryStatic {
  (selector: string | Element): JQueryInstance;
  fn: Record<string, unknown>;
  window?: JQueryInstance;
}

interface JQueryInstance {
  counterUp?: (options: Record<string, number>) => void;
  owlCarousel?: (options: Record<string, unknown>) => void;
  addClass?: (cls: string) => void;
  removeClass?: (cls: string) => void;
  on?: (event: string, handler: () => void) => void;
  off?: (events: string) => void;
  animate?: (props: Record<string, number>, duration: number, easing: string) => void;
  fadeOut?: (speed: string) => void;
  fadeIn?: (speed: string) => void;
  click?: (handler: (e: { preventDefault: () => void }) => void) => void;
  scrollTop?: () => number;
  length?: number;
  find?: (sel: string) => JQueryInstance;
  attr?: (name: string, value?: string) => string | void;
  hover?: (enter: () => void, leave: () => void) => void;
}

export function initWow() {
  if (typeof window === 'undefined' || !window.WOW) return;
  try {
    new window.WOW().init();
  } catch {
    /* WOW already initialized */
  }
}

export function initCounterUp() {
  const $ = window.jQuery;
  if (typeof $ === 'undefined' || typeof $.fn.counterUp === 'undefined') return;
  const el = $('[data-toggle="counter-up"]') as unknown as JQueryInstance;
  el.counterUp?.({ delay: 10, time: 2000 });
}

export function initOwlCarousels() {
  const $ = window.jQuery;
  if (typeof $ === 'undefined' || typeof $.fn.owlCarousel === 'undefined') return;

  const testimonial = $('.testimonial-carousel') as unknown as JQueryInstance;
  testimonial.owlCarousel?.({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  const vendor = $('.vendor-carousel') as unknown as JQueryInstance;
  vendor.owlCarousel?.({
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 2 },
      576: { items: 4 },
      768: { items: 6 },
      992: { items: 8 },
    },
  });
}

export function destroyOwl(selector: string) {
  const $ = window.jQuery;
  if (typeof $ === 'undefined') return;
  const el = $(selector);
  if (el && typeof (el as JQueryInstance & { trigger?: unknown }).trigger === 'function') {
    (el as unknown as { trigger: (evt: string) => void }).trigger('destroy.owl.carousel');
  }
}

export function initJqLibs() {
  initWow();
  initCounterUp();
}
