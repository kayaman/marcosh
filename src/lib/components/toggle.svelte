<script lang="ts">
  import { fly } from 'svelte/transition'
  import { Moon, Sun } from 'lucide-svelte'
  import { setTheme, theme, toggleTheme } from '$lib/stores'
  const returnNada = () => '';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
{#if $theme === 'dark'}
  {returnNada(setTheme('dark'))}
  <div in:fly={{ y: 10 }}>
    <Sun />
  </div>

  {:else}
  <div in:fly={{ y: 10 }}>
    {returnNada(setTheme('light'))}
    <Moon />
  </div>
{/if}
</button>

<style>
  button {
    padding: 0;
    font-weight: inherit;
    background: none;
    border: none;
    box-shadow: none;
    overflow: hidden;
  }

  button > * {
    display: flex;
    gap: var(--size-2);
  }
</style>