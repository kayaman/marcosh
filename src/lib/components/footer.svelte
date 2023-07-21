<script lang="ts">
  import * as config from '$lib/config'
  import { theme } from '$lib/stores'
  import { Github, Linkedin, Twitter, Instagram, Code2, FileText } from 'lucide-svelte'
  import BookmarcoDM from './Bookmarco_dark_mode.svelte';
  import BookmarcoLM from './Bookmarco_light_mode.svelte';
  import DiscordDM from './Discord_dark_mode.svelte';
  import DiscordLM from './Discord_light_mode.svelte';

  let selectedBookmarcoTheme = BookmarcoDM
  let selectedDiscordTheme = DiscordDM

  theme.subscribe(value => {
    if (value === 'dark' || value === 'dim') {
      selectedBookmarcoTheme = BookmarcoDM
      selectedDiscordTheme = DiscordDM
    } else {
      selectedBookmarcoTheme = BookmarcoLM
      selectedDiscordTheme = DiscordLM
    }
  })
</script>

<footer>
  
  <p>{config.bottomline}</p>
  <p>{config.title} &copy; {new Date().getFullYear()}</p>
  <p>
    <a href="https://github.com/kayaman" target="_blank"><Github aria-label="GitHub" display="inline" size="22"/></a>
    <a href="https://github.com/kayaman/marcosh" target="_blank"><Code2 aria-label="Blog" display="inline" size="24"/></a>
    <a href="https://bookma.rco.sh" target="_blank" aria-label="Blogmarks"><svelte:component this={selectedBookmarcoTheme} /></a>
    <a href="https://linkedin.com/in/marcoantoniogonzalezjunior" target="_blank"><Linkedin display="inline" size="24" aria-label="LinkedIn" /></a>
    <a href="https://github.com/kayaman/resume/blob/main/MarcoAntonioGonzalezJunior_en.pdf" target="_blank"><FileText aria-label="Résumé" display="inline" size="24"/></a>
    <a href="https://discord.gg/5PQYtGN9" target="_blank" aria-label="Discord"><svelte:component this={selectedDiscordTheme} /></a>
    <a href="https://twitter.com/kayaman" target="_blank"><Twitter aria-label="Twitter" display="inline" size="24"/></a>
    <a href="https://instagram.com/marcoantoniogonzalezjunior" target="_blank"><Instagram aria-label="Instagram" display="inline" size="24" /></a>
  </p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
    justify-content: space-between;
    padding-block: var(--size-3);
  }
  
  p {
    font-size: var(--size-3);
    color: var(--text-1);
    vertical-align: middle;
  }
  a {
    display: inline-flex;
    color: var(--text-1);
    padding-inline: var(--size-2);
  }
  
  @media(width <= 480px) and (orientation: portrait) {
    
    footer {
      align-items: center;
      justify-content: center;
      padding-block-end: var(--size-3);
    }
    footer p:not(:last-child) {
      display: none;
      visibility: hidden;
    }
    
    a {
      padding-inline-start: var(--size-fluid-2);
    }

  }
  
</style>
