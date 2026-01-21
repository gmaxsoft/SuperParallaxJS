# 🚀 Super Parallax JS

Lekka (poniżej 2kb), wysokowydajna biblioteka JavaScript do tworzenia efektu parallax. Wykorzystuje **Intersection Observer API** oraz **akcelerację sprzętową (GPU)**, aby zapewnić maślaną płynność nawet na urządzeniach mobilnych.

## ✨ Główne cechy
- 🏎️ **Wydajność:** Animacje oparte na `requestAnimationFrame` i `translate3d`.
- 🔋 **Smart:** Aktywuje się tylko wtedy, gdy element jest widoczny na ekranie (Intersection Observer).
- 🔌 **Zero zależności:** Nie wymaga jQuery ani innych bibliotek.
- 🛠️ **Prostota:** Działa automatycznie na elementach z klasą `.parallax`.

## 📦 Instalacja

Za pomocą npm:
```bash
npm install super-parallax
```

Lub przez yarn:
```bash
yarn add super-parallax
```

## 🚀 Szybki start

### 1. Przygotuj HTML

Dodaj klasę `parallax` do elementów, które mają być animowane. Dla najlepszego efektu upewnij się, że obrazek jest nieco większy niż jego kontener.

```html
<div class="container">
  <img src="image.jpg" class="parallax" alt="Góry">
</div>
```

### 2. Zainicjuj w JS

Wystarczy zaimportować i stworzyć nową instancję klasy.

```javascript
import Parallax from 'super-parallax';

const prlx = new Parallax({
  speed: 0.3
});
```

## ⚙️ Konfiguracja (Options)

| Parametr | Typ | Domyślnie | Opis |
|----------|-----|-----------|------|
| speed | Number | 0.2 | Szybkość ruchu (od -1.0 do 1.0). Wyższe wartości to mocniejszy efekt. |

## 🎨 Wskazówka dotycząca CSS

Aby efekt wyglądał profesjonalnie, warto nadać kontenerowi obrazka `overflow: hidden`, a samemu obrazkowi np. `will-change: transform`:

```css
.container {
  overflow: hidden;
  height: 500px;
}

.parallax {
  width: 100%;
  height: 120%; /* Trochę większy, aby było miejsce na ruch */
  object-fit: cover;
  will-change: transform;
}
```

## 📄 Licencja

Projekt wydany na licencji MIT.
