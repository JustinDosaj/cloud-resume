import { Container } from "@/components/Container";


export default function Articles() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Article Page Test
          </h1>
          <p className="mt-6 text-base text-zinc-600">
            Hello, I am Justin. I am in the process of finishing this web page, but it is not quite ready.
          </p>

        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">

          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">

          </div>
        </div>
      </Container>
    </>
  )
}
