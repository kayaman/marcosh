<script lang="ts">
  import { formatDate } from '$lib/util.js'

  export let data
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{data.meta.title}" />
</svelte:head>

<article>
  <hggroup>
    <h1>{data.meta.title}</h1>
    <p>Published at {formatDate(data.meta.date)}</p>
  </hggroup>

  <div class='tags'>
    {#each data.meta.categories as tag}
      <span class='surface-4'>&num;{tag}</span>
    {/each}
  </div>

  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {
    max-inline-size: var(--size-content-3);
    margin-inline: auto;
  }

  h1 {
    text-transform: capitalize;
  }

  h1 + p {
    margin-top: var(--size-2);
    color: var(--text-2);
  }

  .tags {
    display: flex;
    gap: var(--size-3);
    margin-top: var(--size-7);
  }

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>