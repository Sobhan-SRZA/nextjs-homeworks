async function UserDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <>
      <h1 className="text-2xl">
        Dashboard User Details page - User #{id}
      </h1>
      <p>
        Details of user #{id}
      </p>
    </>
  )
}

export default UserDetails