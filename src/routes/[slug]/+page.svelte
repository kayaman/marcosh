<script lang="ts">
  import { formatDate } from '$lib/util.js'

  export let data
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <hggroup>
    <h1>{data.meta.title}</h1>
    <p class="date">Published at {formatDate(data.meta.date)}</p>
  </hggroup>

  <div class="tags">
    {#each data.meta.categories as tag}
      <span class="tag">&num;{tag}</span>
    {/each}
  </div>

  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {
    max-inline-size: var(--size-content-lg);
    margin-inline: auto;
  }

  h1 {
    font-size: var(--size-5);
    text-transform: capitalize;
    max-inline-size: inherit;
  }

  .date {
    color: var(--text-3);
    font-size: var(--size-3);
  }
  .tag {
    font-size: var(--size-3);
    display: inline-block;
    border-radius: 3px;
    padding: .1em .15em .1em;
    border-radius: 2px;
    background: var(--tag-bg);
    color: var(--tag-color);
    font-weight: 600;
    margin: .1em .1em
}

  .tags {
    display: flex;
    gap: var(--size-1);
    margin-top: var(--size-1);
  }

  @media(width <= 480px) and (orientation: portrait) {
    h1 {
      font-size: var(--size-4);
    }

    .date {
      font-size: var(--size-3);
    }

    .tag {
      font-size: var(--size-fluid-2);      
    }
  }
</style>
