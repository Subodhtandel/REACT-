import { gql } from "@apollo/client"

export const GET_PLAYLIST = gql`
  query {
    playlist(id: "1") {
      id
      name
      songs {
        title
        artist
      }
    }
  }
`

export const GET_SONGS = gql`
  query {
    songs {
      id
      title
      artist
      duration
    }
  }
`