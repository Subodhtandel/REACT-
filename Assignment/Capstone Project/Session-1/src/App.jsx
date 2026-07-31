import { useState } from "react"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Category from "./components/Category"
import Home from "./pages/Home"

function App() {

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("general")

  return (
    <>
      <Navbar />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Category
        category={category}
        setCategory={setCategory}
      />

      <Home
        search={search}
        category={category}
      />
    </>
  )
}

export default App