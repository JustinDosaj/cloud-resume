import { TbBriefcase, TbDownload   } from "react-icons/tb";
import { Button } from "./Button";
import { type StaticImageData } from 'next/image'
import { awsCertImage, awsCertUrl, resumeUrl, csDegreeImage } from "./Constants";


export function Certifications() {
    const resume: Array<Role> = [
        {
            name: 'AWS Certified Solutions Architect - Associate',
            authority: 'Amazon Web Services',
            logo: awsCertImage,
            earned: 'Oct. 2024',
            url: awsCertUrl,
        },
        {
            name: 'Bacherlor of Science in Computer Science',
            authority: 'CSU San Marcos',
            logo: csDegreeImage,
            earned: 'Dec. 2020',
        },
      ]

      const handleDownload = async () => {

        try {
          // Fetch Resume PDF
          const response = await fetch(resumeUrl)
          const blob = await response.blob()

          const blobUrl = window.URL.createObjectURL(blob)
          
          // Download file link
          const link = document.createElement('a')
          link.href = blobUrl;
          link.download = 'justin_dosaj_resume_no_pi.pdf';

          document.body.append(link)
          link.click()

          // Cleanup document & window
          document.body.removeChild(link)
          window.URL.revokeObjectURL(blobUrl)

        } catch(error) {
          console.error('Problem downloading file: ', error)
        }
      }
    
      return (
        <div className="rounded-2xl border border-zinc-100 p-6">
          <h2 className="flex text-sm font-semibold text-zinc-900">
            <TbBriefcase className="h-6 w-6 flex-none" />
            <span className="ml-3">Certifications</span>
          </h2>
          <ol className="mt-6 space-y-4">
            {resume.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
            ))}
          </ol>
          <Button onClick={handleDownload} variant="secondary" className="group mt-6 w-full">
            Download CV
            <TbDownload  className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600" />
          </Button>
        </div>
      )
}

interface Role {
    name: string
    authority: string
    logo: string | StaticImageData
    earned: string | { label: string; dateTime: string }
    url?: string
}

function getImageSource(src: string | StaticImageData): string {
    if (typeof src === 'string') return src;
    return src.src;
}

function Role({ role }: { role: Role }) {
    const startLabel =
      typeof role.earned === 'string' ? role.earned : role.earned.label
      const startDate =
      typeof role.earned === 'string' ? role.earned : role.earned.dateTime

  
    return (

        <li className="flex gap-4">
          <div className="bg-white relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
            <img src={getImageSource(role.logo)} alt="" className="h-7 w-7"/>
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Name</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900">
              {role.name}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500">
              {role.authority}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400"
            >
              <time dateTime={startDate}>{startLabel}</time>
            </dd>
          </dl>
        </li>

    )
}