import { Github, Linkedin, Mail } from 'lucide-react'
import site from '../data/site.json'


const iconMap: Record<string, JSX.Element> = {
GitHub: <Github size={18} aria-hidden />,
LinkedIn: <Linkedin size={18} aria-hidden />,
Email: <Mail size={18} aria-hidden />
}


export default function SocialIcons() {
return (
<div className="d-flex align-items-center gap-3">
{site.socials.map(s => (
<a key={s.label} href={s.url} target="_blank" rel="noopener" aria-label={`${s.label} (opens in new tab)`} className="text-decoration-none">
{iconMap[s.label] ?? <span>{s.label}</span>}
</a>
))}
</div>
)
}