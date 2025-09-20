export interface ProjectLink { live?: string; code?: string }
export interface ProjectItem {
id: string
title: string
summary: string
description: string
tech: string[]
tags: string[]
image: string
images: string[]
links: ProjectLink
year: number
featured?: boolean
}


export interface ExperienceItem {
id: string
role: string
company: string
start: string // ISO date or '2021'
end: string // ISO date or 'Present'
achievements: string[]
}


export interface SiteMeta {
name: string
role: string
primaryColor: string
accentColor: string
socials: { label: string; url: string; icon?: string }[]
resumeUrl?: string
}