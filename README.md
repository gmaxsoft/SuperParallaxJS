# 🚀 Super Parallax JS

Lightweight (under 2kb), high-performance JavaScript library for creating parallax effects. Uses **Intersection Observer API** and **hardware acceleration (GPU)** to ensure buttery smooth performance even on mobile devices.

## ✨ Key Features
- 🏎️ **Performance:** Animations based on `requestAnimationFrame` and `translate3d`.
- 🔋 **Smart:** Activates only when elements are visible on screen (Intersection Observer).
- 🔌 **Zero dependencies:** No jQuery or other libraries required.
- 🛠️ **Simplicity:** Works automatically on elements with `.parallax` class.

## 📦 Installation

Using npm:
```bash
npm install super-parallax
```

Or via yarn:
```bash
yarn add super-parallax
```

## 🚀 Quick Start

### 1. Prepare HTML

Add the `parallax` class to elements you want to animate. For best results, make sure the image is slightly larger than its container.

```html
<div class="container">
  <img src="image.jpg" class="parallax" alt="Mountains">
</div>
```

### 2. Initialize in JS

#### ES Module (Recommended)

```javascript
import Parallax from 'super-parallax';

const prlx = new Parallax({
  speed: 0.3
});
```

#### CommonJS

```javascript
const Parallax = require('super-parallax');

const prlx = new Parallax({
  speed: 0.3
});
```

#### Browser (Script Tag)

```html
<script src="node_modules/super-parallax/index.js"></script>
<script>
  const prlx = new Parallax({
    speed: 0.3
  });
</script>
```

## ⚙️ Configuration (Options)

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| speed | Number | 0.2 | Movement speed (from -1.0 to 1.0). Higher values mean stronger effect. |

## 🎨 CSS Tips

To make the effect look professional, it's worth giving the image container `overflow: hidden`, and the image itself `will-change: transform`:

```css
.container {
  overflow: hidden;
  height: 500px;
}

.parallax {
  width: 100%;
  height: 120%; /* Slightly larger to allow movement */
  object-fit: cover;
  will-change: transform;
}
```

## 📝 Examples

Check out the `example/` directory for a complete working demo with HTML, CSS, and JavaScript.

## 🧪 Testing

Run tests with:

```bash
npm test
```

## 📄 License

Project released under MIT license.
