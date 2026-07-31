import contextProvider from "./components/Mycontext"
import { UseEffect } from "./components/UseEffect"
import { UseReducer } from "./components/UseReducer"
import { UseRef } from "./components/UseRef"
import { UseState } from "./components/UseState"

const App = () => {

  return <>
  <contextProvider>
    <UseState />
    <hr />
    <UseRef />
    <hr />
    <UseEffect />
    <UseReducer />
  </contextProvider>
</>
}

export default App