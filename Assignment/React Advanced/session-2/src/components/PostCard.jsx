import useLikeButton from "../hooks/useLikeButton"

function PostCard() {
  const { liked, likes, toggleLike } =
    useLikeButton(100)

  return (
    <div>
      <h2>Instagram Post</h2>

      <img
        src="https://picsum.photos/300"
        alt="post"
      />

      <br />

      <button onClick={toggleLike}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <p>{likes} Likes</p>
    </div>
  )
}

export default PostCard