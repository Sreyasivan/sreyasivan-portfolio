import type { AboutContent, EducationEntry, ExperienceEntry, Site } from '@/data/types'

/* Search-engine data about the site owner, built only from CMS content. */

export const siteBase = (site: Site) => site.canonicalUrl.replace(/\/$/, '')

/** The first name people use; the full name ("Sreya Sivan") leads titles and headings. */
export const SHORT_NAME = 'Sreya'

/** The handle used on GitHub and LinkedIn, typed as one word. */
export const HANDLE = 'Sreyasivan'

/** "Sreya Sivan": titles lead with the full name, the way people search for it. */
export const brandName = (site: Site) => site.fullName

/** Page title used when a page does not set its own: name first, then what the person does. */
export const defaultTitle = (site: Site) => [brandName(site), site.currentRole].filter(Boolean).join(' · ')

/** Spellings people type when looking for the owner, so search engines tie them to one person. */
export function nameVariants(site: Site): string[] {
  const [first, ...rest] = site.fullName.split(/\s+/)
  const initial = rest.length ? `${first} ${rest.join(' ')[0]}` : ''
  return [...new Set([HANDLE, site.fullName.replace(/\s+/g, ''), SHORT_NAME, site.displayName, initial].filter((name) => name && name !== site.fullName))]
}

/** Breadcrumb trail for search results ("sreyasivan.me › Projects › Zero-ETL Analytics"). */
export function breadcrumbSchema(site: Site, trail: { name: string; path: string }[]) {
  const base = siteBase(site)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: brandName(site), path: '/' }, ...trail].map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: `${base}${item.path}` })),
  }
}

function address(location?: string) {
  if (!location) return undefined
  const [locality, ...rest] = location.split(',').map((part) => part.trim())
  return { '@type': 'PostalAddress', addressLocality: locality, addressCountry: rest.join(', ') || undefined }
}

export function personSchema(
  site: Site,
  extra: { photo?: { url: string; width?: number; height?: number }; about?: AboutContent; experience?: ExperienceEntry[]; education?: EducationEntry[] } = {},
) {
  const base = siteBase(site)
  const current = extra.experience?.find((entry) => entry.current)
  const skills = (extra.about?.sections ?? []).flatMap((section) => (section.kind === 'technologies' ? section.groups.filter((g) => !/learning/i.test(g.label)).flatMap((g) => g.items) : []))
  return {
    '@type': 'Person',
    '@id': `${base}/#person`,
    name: site.fullName,
    alternateName: nameVariants(site),
    givenName: SHORT_NAME,
    familyName: site.fullName.split(/\s+/).slice(1).join(' ') || undefined,
    url: base,
    description: site.description,
    image: extra.photo ? { '@type': 'ImageObject', url: extra.photo.url, width: extra.photo.width, height: extra.photo.height } : undefined,
    jobTitle: current?.role ?? site.currentRole,
    worksFor: current ? { '@type': 'Organization', name: current.company, url: current.companyUrl } : undefined,
    alumniOf: (extra.education ?? []).map((entry) => ({ '@type': 'CollegeOrUniversity', name: entry.institution })),
    address: address(site.location),
    email: site.email ? `mailto:${site.email}` : undefined,
    knowsAbout: skills.length ? skills : undefined,
    sameAs: site.socialLinks.map((link) => link.href),
  }
}

export function websiteSchema(site: Site) {
  const base = siteBase(site)
  return {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: base,
    name: brandName(site),
    alternateName: [site.fullName, ...nameVariants(site)],
    description: site.description,
    inLanguage: 'en',
    publisher: { '@id': `${base}/#person` },
  }
}
