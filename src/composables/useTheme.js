import { ref } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const initTheme = () => {
    if (localStorage.theme === 'light') {
      isDark.value = false
      document.documentElement.classList.remove('dark')
    } else {
      isDark.value = true
      document.documentElement.classList.add('dark')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  return {
    isDark,
    initTheme,
    toggleTheme
  }
}
