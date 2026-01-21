import { test } from 'node:test';
import assert from 'node:assert';

// This test simulates the actual usage: import Parallax from 'super-parallax'
test('Can import Parallax using ES module syntax', async () => {
  // Simulate importing from package (in real usage this would be: import Parallax from 'super-parallax')
  const Parallax = (await import('../index.mjs')).default;
  
  assert.ok(Parallax, 'Parallax should be imported');
  assert.strictEqual(typeof Parallax, 'function', 'Parallax should be a class');
  
  // Verify it can be instantiated
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
  
  const instance = new Parallax({ speed: 0.5 });
  assert.ok(instance instanceof Parallax, 'Should create Parallax instance');
  assert.strictEqual(instance.speed, 0.5, 'Speed should be set correctly');
});

test('Default export works correctly', async () => {
  const module = await import('../index.mjs');
  
  // Should have default export
  assert.ok('default' in module, 'Module should have default export');
  assert.strictEqual(typeof module.default, 'function', 'Default should be a function/class');
  
  // Should be the Parallax class
  assert.strictEqual(module.default.name, 'Parallax', 'Default export should be Parallax class');
});
