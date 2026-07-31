import LoginForm from "./components/LoginForm"
import FormikLogin from "./components/FormikLogin"
import PlaylistForm from "./components/PlaylistForm"

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <LoginForm />

      <hr />

      <FormikLogin />

      <hr />

      <PlaylistForm />
    </div>
  )
}

export default App