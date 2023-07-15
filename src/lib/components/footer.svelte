<script lang="ts">
  import * as config from '$lib/config'
  import { GithubIcon } from 'lucide-svelte'
</script>

<footer>
  
  <p><a href="https://github.com/kayaman/marcosh" target="_blank"><GithubIcon size="14" display="inline"/></a><span>{config.bottomline}</span></p>
  <p>{config.title} &copy; {new Date().getFullYear()}</p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
    justify-content: space-between;
    padding-block: var(--size-5);
    border-top: 1px solid var(--border);
    
  }

  p {
    font-size: var(--size-3);
    color: var(--text-1);
    vertical-align: middle;
  }

  span {
    padding-left: var(--size-1);
  }

  a {
    display: inline-flex;
    color: var(--text-1);
  }


  
</style>
