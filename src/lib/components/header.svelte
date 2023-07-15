<script lang="ts">
  import * as config from '$lib/config'
  import Toggle from '$lib/components/toggle.svelte'
  import { Rss } from 'lucide-svelte'
</script>

<nav>
  <div>
    <a href="/" class="title">
      <b class="title">{config.title}</b>
    </a>
    <h4>
      <b class="tagline">{config.tagline}</b>
    </h4>
  </div>
  <ul class="links">
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
    <li>
      <Toggle />
    </li>
    <li>
      <a href="/feed.xml" target="_blank" class="in"><Rss display="inline"/></a>
    </li>
  </ul>
</nav>

<style>
  nav {
    padding-block-start: var(--size-1);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: var(--size-1);
  }

  .title {
    font-size: var(--size-7);
    font-weight: 700;
    color: var(--text-1);
  }

  .tagline {
    color: var(--text-2);
    font-size: var(--size-3);
    font-weight: 400;
  }

  .links {
    margin-block: var(--size-3);
    right: var(--size-7);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    padding-block-end: var(--size-7);
  }

  li a {
    display: inline;
  }

  .in {
    display: inline;
  }

  h4 {
    position: relative;
  }

  li {
    vertical-align: top;
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .links {
      display: flex;
      gap: var(--size-7);
      margin-block: 0;
    }
  }
</style>
