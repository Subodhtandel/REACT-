import { useState } from "react"

import {
  signInWithEmailAndPassword
} from "firebase/auth"

import { auth } from "../firebase/firebase"

import { useNavigate } from "react-router-dom"

export default function Login() {

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      navigate("/dashboard")

    } catch (err) {

      setError(err.message)

    }

  }

  return (

    <div className="login">

      <h2>Spotify Login</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button>

          Login

        </button>

      </form>

    </div>

  )

}