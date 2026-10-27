import '@testing-library/jest-dom';

// Mock IntersectionObserver for Framer Motion viewport triggers in jsdom
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  disconnect = () => {};
  observe = () => {};
  takeRecords = () => [];
  unobserve = () => {};
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock HTMLMediaElement play & pause in jsdom
window.HTMLMediaElement.prototype.play = () => Promise.resolve();
window.HTMLMediaElement.prototype.pause = () => {};

// Mock HTMLCanvasElement getContext in jsdom
HTMLCanvasElement.prototype.getContext = (() =>
  ({
    clearRect: () => {},
    fillRect: () => {},
    save: () => {},
    restore: () => {},
    translate: () => {},
    rotate: () => {},
    drawImage: () => {},
  })) as any;
