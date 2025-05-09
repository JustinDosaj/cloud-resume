import Link from "next/link"

export function SocialLink({ icon: Icon, ...props }: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
  }) {
    return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 transition group-hover:text-gray-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </Link>
    )
}

