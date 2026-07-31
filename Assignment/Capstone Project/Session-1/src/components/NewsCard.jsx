function NewsCard({ article }) {

  return (
    <div className="card">

      <img
        src={article.urlToImage}
        width="250"
      />

      <h3>{article.title}</h3>

      <p>{article.description}</p>

      <a href={article.url} target="_blank">
        Read More
      </a>

    </div>
  )
}

export default NewsCard