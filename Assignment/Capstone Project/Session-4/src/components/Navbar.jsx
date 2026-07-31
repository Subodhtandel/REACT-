import "./Navbar.css"

function Navbar({ active }) {
  const links = ["Home", "Orders", "Cart", "Profile"]

  return (
    <nav className="navbar">
      <h2>Zomato</h2>

      <ul>
        {links.map((link) => (
          <li
            key={link}
            className={active === link ? "active" : ""}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar