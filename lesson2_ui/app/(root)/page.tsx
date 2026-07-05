import Link from "next/link"

function Home() {
  return (
    <>
      <h1 className="text-2xl">
        Next.JS Practice
      </h1>
      <p className="mt-3">
        Welcome to this project.
      </p>

      <Link href={"/about"}>
      Go to About page
      </Link>
    </>
  )
}

export default Home