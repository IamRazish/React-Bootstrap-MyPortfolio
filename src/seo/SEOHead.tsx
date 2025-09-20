import site from '../data/site.json'


export default function SEOHead({ title, description, path, image }: {
title?: string
description?: string
path?: string
image?: string
}) {
const fullTitle = title ? `${title} · ${site.name}` : `${site.name} – ${site.role}`
const url = (site.baseUrl ?? '') + (path ?? '')
const img = image ?? 'https://source.unsplash.com/1200x800/?abstract'
const desc = description ?? 'Portfolio of ' + site.name
return (
<>
<title>{fullTitle}</title>
<meta name="description" content={desc} />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={desc} />
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:image" content={img} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={desc} />
<meta name="twitter:image" content={img} />
</>
)
}