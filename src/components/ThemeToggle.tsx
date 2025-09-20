import { useEffect } from 'react'
import { useLocalStorage } from '../lib/useLocalStorage'
import { Sun, Moon } from 'lucide-react'


export default function ThemeToggle() {
const [theme, setTheme] = useLocalStorage<'light'|'dark'>('theme', 'light')
useEffect(() => {
document.documentElement.setAttribute('data-theme', theme)
const meta = document.querySelector('meta[name="theme-color"]')
meta?.setAttribute('content', theme === 'dark' ? '#0d1117' : '#ffffff')
}, [theme])


return (
<button
className="btn btn-outline-secondary d-inline-flex align-items-center gap-2"
onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
aria-label="Toggle color theme"
>
{theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
<span className="d-none d-md-inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
</button>
)
}