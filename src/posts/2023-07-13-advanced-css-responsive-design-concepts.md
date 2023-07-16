---
title: Advanced CSS Responsive Design Concepts.
description: CSS study notes - selectors, media queries, and responsive design.
date: '2023-07-15'
categories:
  - css
  - learning
  - study-notes
published: true
---

1. Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

2. Media Query Orientation

```css
.box {
  background: red;
  height: 100px;
  width: 100px;
}

/* orientation: landscape or portrait */
@media (min-width: 500px) and (orientation: landscape) {
  .box {
    background: blue;
  }
}
```

3. Media Query Aspect Ratio

```css
.box {
  background: red;
  height: 100px;
  width: 100px;
}

/* 16 / 9 */
@media (min-aspect-ratio: 1 / 1) {
  .box {
    background: blue;
  }
}
```

4. Media Query Ranges

```css
.box {
  background: red;
  height: 100px;
  width: 100px;
}

@media (100px <= width <= 300px) {
  .box {
    background: blue;
  }
}
```

5. Container Queries

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="main">
      <div class="box"></div>
    </div>
    <div class="sidebar">
      <div class="box"></div>
    </div>
  </body>
</html>
```

```css
.main {
  flex-grow: 1;
}

.sidebar {
  width: 30%;
  border-left: 1px solid black;
}

.main,
.sidebar {
  container-type: inline-size;
}

@container (width >= 400px) {
  .box {
    background: red;
  }
}
```

6. Custom Media Queries

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

```css
.box {
  background: red;
  height: 100px;
  width: 100px;
  margin: 20px;
}

@custom-media --big (width >= 500px);

@media (--small) {
  .box {
    background: blue;
  }
}
```

7. Different HTML for mobile/desktop

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="box mobile-only desktop-only"></div>
  </body>
</html>
```

```css
.box {
  background: red;
  height: 100px;
  width: 100px;
  margin: 20px;
}

@custom-media --big (width >= 500px);

@media (--small) {
  .mobile-only {
    display: none;
  }
}

@media (--big) {
  .desktop-only {
    display: none;
  }
}

/* I think he mixed up things above */
```

8. CSS Grid

```html
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="grid">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </body>
</html>
```

```css
body {
  display: flex;
  margin: 0;
}

.box {
  background: red;
  /* height: 100px; */
  width: 100px;
  /* margin: 20px; */
}

.grid {
  width: 100%;
  display: grid;
  gap: 1rem;
  /* grid-template-columns: repeat(3, 1fr)); */
  /* auto-fit or auto-fill */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  /* rows or cols - substitutes hardcoded height or width */
  grid-auto-rows: 100px;
}
```

9. Clamp

```html
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

```css
body {
  display: flex;
  margin: 0;
}

.box {
  background: red;
  height: 200px;
  /* min, normal, max */
  min-width: 100px;
  width: 75%;
  max-width: 500px;
  /* exact same result with clamp: */
  /* it can be used for height, font-size as well */
  width: clamp(100px, 75%, 500px);
  /* example: */
  font-size: clamp(1rem, 5vw, 2rem);
}
```

10. Viewport Units

SEE References

```css
.box-1 {
  background-color: green;
  height: 100vh;
}

.box-2 {
  background-color: blue;
  height: 100svh;
}

.box-3 {
  background-color: coral;
  height: 100lvh;
}

.box-4 {
  background-color: grey;
  height: 100dvh;
}
```

## References

- [Top 10 Advanced CSS Responsive Design Concepts](https://www.youtube.com/watch?v=TUD1AWZVgQ8)

#### pending from WebDevSimplified:

- [Responsive CSS Will Never Be The Same](https://www.youtube.com/watch?v=rrLAg7xNERA)
- [Learn Every CSS Selector in 20 Minutes](https://www.youtube.com/watch?v=l1mER1bV0N0)
- [Learn Every CSS Viewport Unit in 10 Minutes](https://www.youtube.com/watch?v=5m6JOJLy5B0)
