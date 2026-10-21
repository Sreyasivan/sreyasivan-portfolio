import type { Metadata } from 'next'
import { ProjectExplorer } from '@/components/projects/ProjectExplorer'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { PageFrame } from '@/components/shell/PageFrame'
import { getAppearance, getProjects, getProjectsLook } from '@/data/content'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects by Sreya Sivan: data analytics, Generative AI and full-stack (MERN) apps, including a Zero-ETL analytics platform and a financial analytics dashboard.',
  alternates: { canonical: '/projects' },
}

export default async function ProjectsPage() {
  const [projects, theme, look] = await Promise.all([getProjects(), getAppearance(), getProjectsLook()])

  if (projects.length === 0) {
    return (
      <div className="page">
        <header className="page-head">
          <span className="eyebrow">Projects</span>
          <h1>Nothing published yet</h1>
          <p>Projects appear here as soon as one is published from the admin.</p>
        </header>
      </div>
    )
  }

  if (theme.projectDisplayStyle === 'grid') {
    return (
      <PageFrame>
        <div className="page">
          <header className="page-head">
            <span className="eyebrow">Projects</span>
            <h1>Things I have built</h1>
          </header>
          <ProjectGrid projects={projects} />
        </div>
      </PageFrame>
    )
  }

  return (
    <PageFrame>
      <h1 className="sr-only">Projects by Sreya Sivan</h1>
      <ProjectExplorer projects={projects} look={look} />
    </PageFrame>
  )
}
