import { test } from 'node:test';
import assert from 'node:assert';

test('ES Module import from index.mjs should work', async () => {
  const module = await import('../index.mjs');
  
  assert.ok(module.default, 'Module should have default export');
  assert.strictEqual(typeof module.default, 'function', 'Default export should be a function/class');
});

test('Import statement should work with package name', async () => {
  // This simulates: import Parallax from 'super-parallax'
  const Parallax = (await import('../index.mjs')).default;
  
  assert.ok(Parallax, 'Parallax should be imported');
  assert.strictEqual(typeof Parallax, 'function', 'Parallax should be a class/function');
});

test('Module exports field should work', async () => {
  // Test that package.json exports field works
  const module = await import('../index.mjs');
  const Parallax = module.default;
  
  assert.ok(Parallax, 'Parallax should be imported via exports field');
  assert.strictEqual(typeof Parallax, 'function', 'Parallax should be a class/function');
});
