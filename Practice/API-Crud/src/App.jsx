import { Outlet } from "react-router-dom"
import { Container } from "./Componants/Container"
import { ContextProvider } from "./Componants/MyContext"
import { Display } from "./Componants/Display"
import { Create } from "./Componants/Create"

const App = () => {
  return <ContextProvider>
    <Container>
      <Outlet />
    </Container>
  </ContextProvider>
}

export default App