import { useRouter } from "next/router"

export default function Playlist({ playlistId }) {
  const router = useRouter()

  if (router.isFallback) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>Spotify Playlist</h1>
      <h2>Playlist ID: {playlistId}</h2>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { playlistId: "101" } },
      { params: { playlistId: "202" } },
      { params: { playlistId: "303" } },
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      playlistId: params.playlistId,
    },
  }
}