import { useSession, signIn } from "next-auth/react"

export default function Profile() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn()
    },
  })

  if (status === "loading") {
    return <h2>Loading...</h2>
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Page</h1>

      <img
        src={session.user.image}
        alt="Profile"
        width="120"
      />

      <h3>{session.user.name}</h3>

      <p>{session.user.email}</p>
    </div>
  )
}