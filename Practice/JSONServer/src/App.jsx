import React from 'react'
import Container from "./componants/Container";
import Display from "./componants/Display";
import Create from "./componants/Create";
import { ContextProvider } from "./componants/Store";

function App() {

  return (
    <ContextProvider>
      <Container>
        <Create />
        <Display />
      </Container>
    </ContextProvider>
  )
}

export default App