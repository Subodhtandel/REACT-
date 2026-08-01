import { useState } from "react"

const API_URL =
  "https://api-inference.huggingface.co/models/gpt2"

const HF_TOKEN = "YOUR_HUGGINGFACE_API_KEY"

export default function AiQuoteGenerator() {
  const [quote, setQuote] = useState("")
  const [loading, setLoading] = useState(false)
  const [tone, setTone] = useState("inspirational")

  const generateQuote = async () => {
    setLoading(true)

    try {
      const prompt = `Write one short motivational quote in a ${tone} tone.`

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
        }),
      })

      const data = await response.json()

      setQuote(
        data[0]?.generated_text || "No quote generated."
      )
    } catch (err) {
      setQuote("Something went wrong.")
    }

    setLoading(false)
  }

  return (
    <div>
      <h2>AI Quote Generator</h2>

      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option value="funny">Funny</option>
        <option value="serious">Serious</option>
        <option value="inspirational">
          Inspirational
        </option>
      </select>

      <br />
      <br />

      <button onClick={generateQuote}>
        Generate Quote
      </button>

      <br />
      <br />

      {loading ? <p>Loading...</p> : <p>{quote}</p>}
    </div>
  )
}