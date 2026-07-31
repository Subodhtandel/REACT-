import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert("Registration Successful")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={register}>Register</button>
    </div>
  )
}

export default SignUp