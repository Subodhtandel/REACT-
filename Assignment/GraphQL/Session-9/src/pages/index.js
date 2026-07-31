import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <div style={{ padding: "20px" }}>
      <h1>NextAuth Google Login</h1>

      {!session ? (
        <>
          <p>You are not logged in.</p>

          <button onClick={() => signIn("google")}>
            Login with Google
          </button>
        </>
      ) : (
        <>
          <h2>Welcome</h2>

          <p>Name: {session.user.name}</p>

          <p>Email: {session.user.email}</p>

          <button
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            Logout
          </button>
        </>
      )}
    </div>
  )
}