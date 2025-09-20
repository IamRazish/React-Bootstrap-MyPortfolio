export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
return (
<div className="mb-4">
<h2 className="fw-bold">{title}</h2>
{subtitle && <p className="text-secondary m-0">{subtitle}</p>}
</div>
)
}