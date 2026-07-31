import { useEffect, useState } from "react"
import NewsCard from "../components/NewsCard"

function Home({ search, category }) {

  const [news, setNews] = useState([])

  useEffect(() => {

    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2026-06-24&sortBy=publishedAt&apiKey=ad2f5a79a29441599748df4b6c01bd56`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles)
      })

  }, [category])

  const filterNews = news.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      {
        filterNews.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
          />
        ))
      }

    </div>
  )
}

export default Home