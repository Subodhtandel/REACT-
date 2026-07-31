import useCurrentTime from "../hooks/useCurrentTime"

function LiveClock() {
  const time = useCurrentTime()

  return (
    <div>
      <h2>Live Clock</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  )
}

export default LiveClock