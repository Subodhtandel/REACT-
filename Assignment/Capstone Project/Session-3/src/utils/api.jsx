export function printSpotifyKey() {
  console.log(
    "Spotify API Key:",
    process.env.NEXT_PUBLIC_SPOTIFY_API_KEY
  )
}

export function printZomatoConfig() {
  console.log(
    "Zomato API Key:",
    process.env.NEXT_PUBLIC_ZOMATO_API_KEY
  )

  console.log(
    "Zomato API URL:",
    process.env.NEXT_PUBLIC_ZOMATO_API_URL
  )
}