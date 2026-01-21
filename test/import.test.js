import { test } from 'node:test';
import assert from 'node:assert';
import Parallax from '../index.mjs';

test('ES Module import should work', () => {
  assert.ok(Parallax, 'Parallax should be imported');
  assert.strictEqual(typeof Parallax, 'function', 'Parallax should be a class/function');
});

test('Parallax class can be instantiated', () => {
  // Mock DOM environment
  global.document = {
    querySelectorAll: () => []
  };
  global.window = {
    addEventListener: () => {},
    pageYOffset: 0
  };
  global.IntersectionObserver = class {
    observe() {}
  };
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

  const instance = new Parallax({ speed: 0.3 });
  assert.ok(instance, 'Parallax instance should be created');
  assert.strictEqual(instance.speed, 0.3, 'Speed should be set correctly');
});

test('Parallax uses default speed when not provided', () => {
  global.document = {
    querySelectorAll: () => []
  };
  global.window = {
    addEventListener: () => {},
    pageYOffset: 0
  };
  global.IntersectionObserver = class {
    observe() {}
  };
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

  const instance = new Parallax();
  assert.strictEqual(instance.speed, 0.2, 'Default speed should be 0.2');
});

test('Parallax initializes with elements', () => {
  const mockElement = {
    style: {},
    getBoundingClientRect: () => ({ top: 100 })
  };

  global.document = {
    querySelectorAll: () => [mockElement]
  };
  global.window = {
    addEventListener: () => {},
    pageYOffset: 0
  };
  global.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
    }
    observe() {
      // Simulate element being visible
      this.callback([{
        target: mockElement,
        isIntersecting: true
      }]);
    }
  };
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

  const instance = new Parallax({ speed: 0.3 });
  assert.ok(instance, 'Parallax instance should be created');
  assert.strictEqual(instance.elements.length, 1, 'Should find one element');
});
