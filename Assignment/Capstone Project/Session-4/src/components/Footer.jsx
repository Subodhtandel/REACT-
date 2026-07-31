import "./Footer.css"

function Footer({ socialLinks }) {
  return (
    <footer className="footer">

      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}

    </footer>
  )
}

export default Footer