import { useEffect, useState } from "react"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

function LatestAlbums() {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://countries.trevorblades.com/",
      cache: new InMemoryCache(),
    })

    client
      .query({
        query: gql`
          query {
            countries {
              name
              capital
            }
          }
        `,
      })
      .then((result) => {
        const data = result.data.countries.slice(0, 5).map((item) => ({
          name: item.name,
          artist: item.capital || "Unknown",
        }))

        setAlbums(data)
      })
  }, [])

  return (
    <div>
      <h1>Latest Albums</h1>

      {albums.map((album, index) => (
        <div key={index}>
          <h3>{album.name}</h3>
          <p>{album.artist}</p>
        </div>
      ))}
    </div>
  )
}

export default LatestAlbums