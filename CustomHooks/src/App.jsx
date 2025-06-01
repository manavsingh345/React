import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from "./hooks/useFetch.jsx";

function useCounter() {
  const [count, setCount] = useState(0)
  function increaseCount() {
    setCount(count + 1);
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const {finalData, Loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)

  if(Loading){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <div>
      {/* <Counter /> */}
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}










function Counter() {

  const { count, increaseCount } = useCounter();
  return (
    <div>
      <button onClick={increaseCount}>Increase: {count}</button>
    </div>
  );
}

export default App
