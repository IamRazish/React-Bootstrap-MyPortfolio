import { Card } from 'react-bootstrap'
import type { ExperienceItem } from '../types'


export default function TimelineItem({ item }: { item: ExperienceItem }) {
return (
<li className="list-group-item border-0 p-0 mb-4">
<Card className="shadow-sm">
<Card.Body>
<div className="d-flex justify-content-between flex-wrap gap-2">
<div>
<h5 className="m-0">{item.role}</h5>
<small className="text-secondary">{item.company}</small>
</div>
<small className="text-secondary">{item.start} – {item.end}</small>
</div>
<ul className="mt-3 mb-0 ps-3">
{item.achievements.map((a, i) => (<li key={i}>{a}</li>))}
</ul>
</Card.Body>
</Card>
</li>
)
}