<script lang="ts">
  import * as config from '$lib/config'
  import { theme } from '$lib/stores'
  import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, Code2Icon, FileTextIcon } from 'lucide-svelte'
  import BookmarcoDM from './Bookmarco_dark_mode.svelte';
  import BookmarcoLM from './Bookmarco_light_mode.svelte';

  let selectedTheme = BookmarcoDM

  theme.subscribe(value => {
    if (value === 'dark') {
      selectedTheme = BookmarcoDM
    } else {
      selectedTheme = BookmarcoLM
    }
  })
</script>

<footer>
  
  <p>{config.bottomline}</p>
  <p>{config.title} &copy; {new Date().getFullYear()}</p>
  <p>
    <a href="https://github.com/kayaman" target="_blank"><GithubIcon aria-label="GitHub" display="inline" size="20"/></a>
    <a href="https://github.com/kayaman/marcosh" target="_blank"><Code2Icon aria-label="Blog" display="inline" size="20"/></a>
    <a href="https://bookma.rco.sh" target="_blank" aria-label="Blogmarks"><svelte:component this={selectedTheme} /></a>
    <a href="https://linkedin.com/in/marcoantoniogonzalezjunior" target="_blank"><LinkedinIcon display="inline" size="20" aria-label="LinkedIn" /></a>
    <a href="https://github.com/kayaman/resume/blob/main/MarcoAntonioGonzalezJunior_en.pdf" target="_blank"><FileTextIcon aria-label="Résumé" display="inline" size="20"/></a>
    <a href="https://twitter.com/kayaman" target="_blank"><TwitterIcon aria-label="Twitter" display="inline" size="20"/></a>
    <a href="https://instagram.com/marcoantoniogonzalezjunior" target="_blank"><InstagramIcon aria-label="Instagram" display="inline" size="20" /></a>

  </p>
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
  a {
    display: inline-flex;
    color: var(--text-1);
  }

  @media(width <= 480px) and (orientation: portrait) {

    footer {
      align-items: center;
      justify-content: center;
    }
    footer p:not(:last-child) {
      display: none;
      visibility: hidden;
    }

    a {
      padding-inline-start: var(--size-2);
    }

  }
  
</style>
