import { Outlet } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
const App = () => {
  return<>
  <Nav></Nav>
  <Outlet/>
  </>
}
export default App;