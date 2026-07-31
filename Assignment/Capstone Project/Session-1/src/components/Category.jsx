function Category({ category, setCategory }) {

  return (

    <select
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
    >
      <option value="general">General</option>
      <option value="sports">Sports</option>
      <option value="technology">Technology</option>
      <option value="business">Business</option>
      <option value="health">Health</option>
    </select>

  )
}

export default Category