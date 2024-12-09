import { TbBriefcase, TbArrowRight  } from "react-icons/tb";
import { Button } from "./Button";
import { type StaticImageData } from 'next/image'
import { stormgateLogo, stormgateUrl, vurgeLogo, vurgeUrl, zestiLogo, zestiUrl } from "./Constants";


export function Projects() {
    const resume: Array<Role> = [
        {
          company: 'Zesti AI',
          title: 'Software Developer',
          logo: zestiLogo,
          start: '2023',
          end: {
            label: 'Present',
            dateTime: new Date().getFullYear().toString(),
          },
          url: zestiUrl,
        },
        {
          company: 'Stormgate Tactics',
          title: 'Software Developer',
          logo: stormgateLogo,
          start: '2023',
          end: '2023',
          url: stormgateUrl,
        },
        {
          company: 'Vurge.io',
          title: 'Software Developer',
          logo: vurgeLogo,
          start: '2020',
          end: '2022',
          url: vurgeUrl,
        },
      ]
    
      return (
        <div className="rounded-2xl border border-zinc-100 p-6">
          <h2 className="flex text-sm font-semibold text-zinc-900">
            <TbBriefcase className="h-6 w-6 flex-none" />
            <span className="ml-3">Work Experience & Projects</span>
          </h2>
          <ol className="mt-6 space-y-4">
            {resume.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
            ))}
          </ol>
          <Button href="/projects" variant="secondary" className="group mt-6 w-full">
            View All
            <TbArrowRight className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600" />
          </Button>
        </div>
      )
}

interface Role {
    company: string
    title: string
    logo: string | StaticImageData
    start: string | { label: string; dateTime: string }
    end: string | { label: string; dateTime: string }
    url?: string
  }

function getImageSource(src: string | StaticImageData): string {
    if (typeof src === 'string') return src;
    return src.src;
}

function Role({ role }: { role: Role }) {
    const startLabel =
      typeof role.start === 'string' ? role.start : role.start.label
      const startDate =
      typeof role.start === 'string' ? role.start : role.start.dateTime
  
      const endLabel = typeof role.end === 'string' ? role.end : role.end.label
      const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime
  
    return (
        <li className="flex gap-4">
          <div className="bg-white relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
            <img src={getImageSource(role.logo)} alt="" className="h-7 w-7"/>
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900">
              {role.company}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500">
              {role.title}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400"
              aria-label={`${startLabel} until ${endLabel}`}
            >
              <time dateTime={startDate}>{startLabel}</time>{' '}
              <span aria-hidden="true">—</span>{' '}
              <time dateTime={endDate}>{endLabel}</time>
            </dd>
          </dl>
        </li>
    )
}