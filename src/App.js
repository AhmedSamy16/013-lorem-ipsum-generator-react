import { useState } from "react"
import data from "./data"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (count > data.length) {
      const compare = []
      for (let i = 0; i < count; i++) {
        compare.push(data[i % data.length])
      }
      setText(compare)
    } else {
      setText(data.slice(0, count))
    }
  }
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph</label>
        <input id="amount" type="number" min="0" value={count} onChange={(e) => setCount(+e.target.value)} />
        <button className="btn" type="submit">generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })
        }
      </article>
    </section>
  );
}

export default App;