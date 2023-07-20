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

5. Logic

- Toggle

```svelte
<script>
  let user = {
    loggedIn: false,
  }

  function toggle() {
    user.loggedIn = !user.loggedIn
  }
</script>

{#if user.loggedIn}
  <button on:click={toggle}>Log out</button>
{/if}

{#if !user.loggedIn}
  <button on:click={toggle}>Log in</button>
{/if}
```

- Todos

```svelte
<script>
  let todos = [
    { id: 1, text: 'Todo 1', completed: true },
    { id: 2, text: 'Todo 2', completed: false },
    { id: 3, text: 'Todo 3', completed: false },
    { id: 4, text: 'Todo 4', completed: false },
  ]
</script>

<ul>
  {#each todos as todo}
    <li>
      <input checked={todo.completed} type="checkbox" />
      <span>{todo.text}</span>
    </li>
  {/each}
</ul>
```

- Data fetching

```svelte
<script>
  async function fetchPokemon(pokemonName) {
    let url = `https://pokeapi.co/api/v2/pokemon/`
    let response = await fetch(`${url}${pokemonName}`)
    let { name, sprites } = await response.json()

    return {
      name,
      image: sprites['front_default'],
    }
  }
</script>

{#await fetchPokemon('pikachu')}
  <p>Fetching Pokemon...</p>
{:then pokemon}
  <h1>{pokemon.name}</h1>
  <img src={pokemon.image} alt={pokemon.name} />
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
```

6. Events

- Directives

```svelte
<script>
  let mouse = { x: 0, y: 0 }

  function handleMouseMove(event) {
    mouse.x = event.clientX
    mouse.y = event.clientY
  }
</script>

<div on:mousemove={handleMouseMove}>
  The mouse position is {mouse.x} x {mouse.y}
</div>

<style>
  div {
    height: 100vh;
  }
</style>
```

- Event modifiers

```svelte
<script>
  function handleSubmit() {
    console.log('Submit')
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

7. Data Binding

## References

- [Svelte](https://svelte.dev/)
- [SvelteKit Course](https://www.youtube.com/watch?v=BrkrOjknC_E&list=PLA9WiRZ-IS_ylnMYxIFCsZN6xVVSvLuHk&index=1)
