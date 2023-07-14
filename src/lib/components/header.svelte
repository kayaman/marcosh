<script lang="ts">
  import * as config from '$lib/config'
  import Toggle from '$lib/components/toggle.svelte'
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
      <a href="/feed.xml" target="_blank">RSS</a>
    </li>
  </ul>

  <Toggle />
</nav>

<style>
  nav {
    padding-block: var(--size-7);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
  }

  .title {
    font-size: var(--size-7);
    font-weight: 700;
    color: var(--text-1);
  }

  .tagline {
    font-size: var(--size-3);
    font-weight: 400;
    color: var(--text-2);
  }

  .links {
    margin-block: var(--size-7);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h4 {
    position: relative;
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
