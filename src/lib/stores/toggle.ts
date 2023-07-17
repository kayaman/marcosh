import { browser } from '$app/environment'
import { writable } from 'svelte/store'

type Theme = 'light' | 'dark' | 'dim'

const userTheme = browser && localStorage.getItem('color-scheme')

export const theme = writable(userTheme ?? 'dark')

export const toggleTheme = () => {
  theme.update((currentTheme) => {
    let newTheme: Theme = 'light'
    if (currentTheme === 'light') {
      newTheme = 'dim'
    } else if (currentTheme === 'dim') {
      newTheme = 'dark'
    } else if (currentTheme === 'dark') {
      newTheme = 'light'
    }
    document.documentElement.setAttribute('color-scheme', newTheme)
    localStorage.setItem('color-scheme', newTheme)
    return newTheme
  })
}

export const setTheme = (newTheme: Theme) => {
  theme.set(newTheme)
}
