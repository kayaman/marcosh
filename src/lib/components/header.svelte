<script lang="ts">
  import * as config from '$lib/config'
  import Toggle from '$lib/components/toggle.svelte'
  import { PersonStanding, Rss, Mail } from 'lucide-svelte'
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
      <a href="/about"><PersonStanding size="25" style="display: inline"/></a>
    </li>    
    <li>
      <a href="mailto:m@rco.sh"><Mail style="display: inline"/></a>
    </li>
    <li>
      <Toggle />
    </li>
    <li>
      <a href="/feed.xml" target="_blank"><Rss style="display: inline"/></a>
    </li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-block-start: var(--size-1);
    padding-block-end: var(--size-5);
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
    color: var(--text-1);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: var(--size-2);
    margin-block: var(--size-1);
    right: var(--size-7);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  
  h4 {
    position: relative;
  }
  
  li {
    vertical-align: top;
  }
  
  @media(width <= 480px) and (orientation: portrait) {
    nav {
      padding-block-start: var(--size-fluid-1);
    }
    .tagline {
      display: none;
      visibility: hidden;
    }
    
    ul {
      padding-block-start: var(--size-fluid-1);
    }

    ul li {
      padding-inline-start: var(--size-fluid-1);
    }

    .title {
      font-size: var(--size-6);
    }
    .links {
      font-size: var(--size-3);
    }
  }
</style>
