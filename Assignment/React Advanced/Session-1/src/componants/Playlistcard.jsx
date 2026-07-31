export const Playlistcard = ({ songName, artist }) => {
    return (
        <div
        style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        color: "#0b0b0b",
      }}
      >
            <h3>{songName}</h3>
            <p>Artist: {artist}</p>
        </div>
    )
}
export default Playlistcard