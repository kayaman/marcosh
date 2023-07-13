<script lang="ts">
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'

  import 'open-props/style'
  import 'open-props/normalize'
  import 'open-props/buttons'

  import '../app.css'
</script>

<div class="container">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .container {
    display: grid;
    max-inline-size: 1440px;
    height: 100%;
    grid-template-rows: auto 1fr auto;
    margin-inline: auto;
    padding-inline: var(--size-7);
  }

  main {
    padding-block: var(--size-9);
  }

  @media (min-width: 1440px) {
    .container {
      padding-inline: 0;
    }
  }
</style>
