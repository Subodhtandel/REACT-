import "./Card.css"

function Card({ image, title, songs }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{songs} Songs</p>
    </div>
  )
}

export default Card