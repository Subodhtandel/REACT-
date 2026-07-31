import React, {useState,useMemo,useCallback,memo} from "react"

const Item = memo(({ item, onClick }) => {
  console.log("Rendering", item)

  return (
    <li onClick={() => onClick(item)}>
      {item}
    </li>
  )
})

function OptimizedList() {
  const [count, setCount] = useState(0)

  const items = useMemo(() => {
    return Array.from(
      { length: 1000 },
      (_, i) => `Item ${i + 1}`
    )
  }, [])

  const handleClick = useCallback((item) => {
    console.log(item)
  }, [])

  return (
    <div>
      <h2>Optimized Large List</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Count : {count}
      </button>

      <ul>
        {items.map((item) => (
          <Item
            key={item}
            item={item}
            onClick={handleClick}
          />
        ))}
      </ul>
    </div>
  )
}

export default OptimizedList