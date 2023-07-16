---
title: Svelte Course
description: Svelte Course Study Notes
date: '2023-07-01'
categories:
  - svelte
  - sveltekit
  - learning
  - study-notes
published: false
---

## 1. Introduction

Whats is Svelte?

## 2. The Svelte Compiler

Compare the payloads of React and Svelte.
Svelte Materialify Playground

```javascript
import './App.css'

export default function App() {
  return <h1>🔥 React</h1>
}
```

```svelte
<script>
  import './styles.css'
</script>

<h1>🔥 Svelte</h1>
```

3. Svelte Basics

```svelte
<script>
  let count = 0

  function increment() {
    count += 1
  }
</script>

<p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>
<button on:click={increment}>Click</button>
```

4. Reactivity

`console.log` is rerun when `count` changes.

```svelte
<script>
  let count = 0
  $: console.log(count)
</script>

<button
  on:click={() => {
    count += 1
  }}>Click</button
>
```

## References

- [Svelte](https://svelte.dev/)
- [SvelteKit Course](https://www.youtube.com/watch?v=BrkrOjknC_E&list=PLA9WiRZ-IS_ylnMYxIFCsZN6xVVSvLuHk&index=1)
