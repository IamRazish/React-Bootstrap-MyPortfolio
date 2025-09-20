import { Card, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { ProjectItem } from '../types'


export default function ProjectCard({ p }: { p: ProjectItem }) {
return (
<Card className="h-100 card-lift">
<Card.Img variant="top" src={p.image} alt={p.title} loading="lazy" />
<Card.Body>
<Card.Title className="d-flex justify-content-between align-items-start">
<span>{p.title}</span>
<small className="text-secondary">{p.year}</small>
</Card.Title>
<Card.Text>{p.summary}</Card.Text>
<div className="d-flex flex-wrap gap-2 mb-3" aria-label="Technologies used">
{p.tech.slice(0, 5).map(t => <Badge key={t} bg="secondary" className="rounded-pill">{t}</Badge>)}
</div>
<div className="d-flex gap-2">
<Link to={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
  <Button variant="primary">Details</Button>
</Link>
{p.links.live && <Button as="a" href={p.links.live} target="_blank" rel="noopener" variant="outline-primary" aria-label="Opens in new tab">Live</Button>}
{p.links.code && <Button as="a" href={p.links.code} target="_blank" rel="noopener" variant="outline-secondary" aria-label="Opens in new tab">Code</Button>}
</div>
</Card.Body>
</Card>
)
}