import React, { useState } from "react"
import { useMutation } from "@apollo/client/react"
import { ADD_SONG } from "../graphql/mutations"
import { GET_SONGS } from "../graphql/queries"

const AddSong = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")

  const [addSong, { loading, error }] = useMutation(ADD_SONG)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !artist) {
      alert("Please enter both title and artist.")
      return
    }

    try {
      await addSong({
        variables: {
          title,
          artist,
        },

        optimisticResponse: {
          addSong: {
            __typename: "Song",
            id: Date.now().toString(),
            title,
            artist,
          },
        },

        update: (cache, { data }) => {
          if (!data?.addSong) return;

          const existing = cache.readQuery({
            query: GET_SONGS,
          })

          if (existing) {
            cache.writeQuery({
              query: GET_SONGS,
              data: {
                songs: [...existing.songs, data.addSong],
              },
            })
          }
        },
      })

      setTitle("")
      setArtist("")
    } catch (err) {
      console.error("Error adding song:", err)
    }
  }

  return (
    <div>
      <h2>Add Song</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <br />
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Song"}
        </button>

        {error && (
          <p style={{ color: "red" }}>
            Error: {error.message}
          </p>
        )}
      </form>
    </div>
  )
}

export default AddSong