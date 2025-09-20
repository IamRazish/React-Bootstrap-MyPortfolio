import { Badge, Button } from 'react-bootstrap'


export default function TagFilter({ tags, active, onChange }: {
tags: string[]
active: Set<string>
onChange: (tag: string) => void
}) {
return (
<div className="d-flex flex-wrap gap-2" role="group" aria-label="Project tag filters">
{tags.map(tag => (
<Button key={tag} size="sm" variant={active.has(tag) ? 'primary' : 'outline-secondary'} onClick={() => onChange(tag)}>
<Badge bg="" className="me-1">#</Badge>{tag}
</Button>
))}
</div>
)
}