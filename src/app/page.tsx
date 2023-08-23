import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const socialLinks = [
    {
      title: 'GitHub',
      url: 'https://github.com/ygorch'
    },
    {
      title: 'Linkedin',
      url: 'https://linkedin.com/in/ygorch/'
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center py-6 px-2 md:p-24">
      <Image
        className="rounded-lg mb-4"
        src={`/ygor-chaves.png`}
        width={384}
        height={384}
        alt="Ygor Chaves"
      />
      <h1 className="text-2xl mb-4 font-bold md:text-9xl">Ygor Chaves</h1>
      <h2 className="text-lg mb-4 font-semibold md:text-6xl">Software Engineer | Team Leadership</h2>
      <h3 className="text-md mb-4 font-mono md:text-2xl"> TypeScript | React | Node.js | Next.js</h3>

      <div className="grid grid-flow-col gap-2 md:gap-4">
        {
          socialLinks.map((o, i) => {
            return (
              <Link
                key={i}
                className="flex w-full p-6 text-left text-inherit no-underline border transition ease-out border-gray-200 rounded-lg hover:bg-gray-900 hover:text-gray-50"
                href={o.url}
              >
                <h3>{o.title} &rarr;</h3>
              </Link>
            )
          })
        }
      </div>
    </main>
  )
}
