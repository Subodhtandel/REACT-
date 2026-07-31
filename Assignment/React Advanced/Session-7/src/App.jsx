import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import ToggleThemeButton from "./components/ToggleThemeButton";

function App() {
  return (
    <div>
      <Navbar />
      <ToggleThemeButton />
      <Feed />
    </div>
  );
}

export default App;