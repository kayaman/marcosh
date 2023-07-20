<script lang="ts">
  import * as config from '$lib/config'
  import { formatDate } from '$lib/util.js'
  export let data
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <ul class="posts">
    {#each data.posts as post}
      <li class="post">
        <a href={post.slug} class="title">{post.title}</a>
        <p class="date">{formatDate(post.date)}</p>
        <p class="description">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
  .posts {
    display: grid;
    gap: var(--size-2);
  }

  .post {
    max-inline-size: var(--size-content-lg);
  }

  .post:not(:last-child) {
    border-bottom: 1px solid var(--border);
    padding-bottom: var(--size-7);
  }

  .title {
    font-size: var(--size-5);
    text-transform: capitalize;
  }

  .date {
    color: var(--text-3);
    font-size: var(--size-2);
  }

  .description {
    font-size: var(--size-3);
    margin-top: var(--size-3);
    max-inline-size: var(--size-content-lg);
  }


  @media(width <= 480px) and (orientation: portrait) {
    .title {
      font-size: var(--size-fluid-2);
    }

    .description {
      display: none;
      visibility: hidden;
    }

    .post:not(:last-child) {
      border-bottom: 1px solid var(--border);
      padding-bottom: var(--size-2);
    }
  }

</style>
