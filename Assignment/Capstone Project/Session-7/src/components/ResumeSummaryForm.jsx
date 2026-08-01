import { useState } from "react"

const API_KEY = "YOUR_OPENAI_API_KEY"

export default function ResumeSummaryForm() {
  const [resume, setResume] = useState("")
  const [summary, setSummary] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const generateSummary = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        "https://api.openai.com/v1/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo-instruct",
            prompt: `Summarize this resume in exactly two lines:\n${resume}`,
            max_tokens: 80,
            temperature: 0.7,
          }),
        }
      )

      if (!response.ok) {
        throw new Error("API Error")
      }

      const data = await response.json()

      setSummary(data.choices[0].text)
    } catch (err) {
      setError(
        "Unable to generate summary. Check your API key or internet connection."
      )
    }

    setLoading(false)
  }

  return (
    <div>
      <h2>Resume Summary</h2>

      <form onSubmit={generateSummary}>
        <textarea
          rows="8"
          cols="50"
          value={resume}
          onChange={(e) =>
            setResume(e.target.value)
          }
          placeholder="Enter resume details"
        />

        <br />

        <button type="submit">
          Generate Summary
        </button>
      </form>

      {loading && <h3>Loading...</h3>}

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      {summary && (
        <>
          <h3>Summary</h3>
          <p>{summary}</p>
        </>
      )}
    </div>
  )
}