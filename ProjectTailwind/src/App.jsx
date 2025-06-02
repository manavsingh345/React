import { useState } from 'react'
import './App.css'
// import Webinar from "./Webinar.jsx";
import { Button } from "./components/Buttons.jsx";
import { Input } from "./components/Input.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-blue-700">
      {/* <Webinar /> */}
      <Input type="text" placeholder="Username"></Input>
      <Button disabled={true}>Sign up</Button>

    </div>
  )
}

export default App
