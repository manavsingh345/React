import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Card>
        <h2>Card Title 1</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Card Title 2</h2>
        <p>This is some content inside the card.</p>
      </Card> */}
      {
        [
          <Todo key={1} title={"Eat breakfast"} done={"true"} />,
          <Todo key={1} title={"Eat Lunch"} done={"true"} />
        ]
      }


    </div>
  )
}
function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      margin: '10px',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
      {children}
    </div>
  )
}

function Todo({ title, done }) {
  return (
    <div>
      {title} - {done ? "Done" : "Not Done!"}
    </div>

  )
}

export default App
