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

      <div className="relative my-2 w-max place-self-center hover:text-blue-400 hover:bg-blue-50 transition cursor-pointer text-blue-200 border-2 rounded-2xl p-2 bg-blue-500/50 backdrop-blur-sm">
        <Link href={"/about"}>
          Go to About page
        </Link>
      </div>

      <div className="relative my-2 w-max place-self-center hover:text-blue-400 hover:bg-blue-50 transition cursor-pointer text-blue-200 border-2 rounded-2xl p-2 bg-blue-500/50 backdrop-blur-sm">
        <Link href={"/dashboard/analytics"}>
          Got to users analytics
        </Link>
      </div>

      <div className="relative my-2 w-max place-self-center hover:text-blue-400 hover:bg-blue-50 transition cursor-pointer text-blue-200 border-2 rounded-2xl p-2 bg-blue-500/50 backdrop-blur-sm">
        <Link href={"/dashboard/users"}>
          Go to Users dashboard
        </Link>
      </div>
    </>
  )
}

export default Home