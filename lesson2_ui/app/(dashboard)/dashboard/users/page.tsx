import Link from "next/link"

function Users() {
  const users = [
    {
      id: 1,
      name: "User 1"
    },
    {
      id: 2,
      name: "User 2"
    },
    {
      id: 3,
      name: "User 3"
    },
    {
      id: 4,
      name: "User 4"
    },
    {
      id: 5,
      name: "User 5"
    }
  ]

  return (
    <>
      <h1 className="text-2xl">
        Users Dashboard page - List of users
      </h1>
      <li>
        {users.map(user => (
          <ul className="text-xs" key={user.id}>
            <Link href={`users/${user.id}`} >
              {user.name} - #{user.id}
            </Link>
          </ul>
        ))}
      </li>
    </>
  )
}

export default Users