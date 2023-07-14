<script lang="ts">
  import * as config from '$lib/config'
</script>

<footer>
  <p>{config.bottomline}</p>
  <p>{config.title} &copy; {new Date().getFullYear()}</p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-block: var(--size-5);
    border-top: 1px solid var(--border);
    
  }
  
  p {
    font-size: var(--size-2);
    color: var(--text-1);
  }
</style>
