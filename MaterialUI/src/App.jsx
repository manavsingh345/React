import { useState } from 'react';
import './App.css';
import SearchBox from "./SearchBox.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBox />
    </>
  )
}

export default App
