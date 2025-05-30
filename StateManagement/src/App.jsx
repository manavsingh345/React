import { useState } from 'react';
import './App.css'

function App() {


  return (
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb() {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  )
}

function BulbState() {
  return (
    <div>

    </div>
  )
}

function ToggleBulbState() {
  return (
    <div>
      <button>Toggle the bulb</button>
    </div>
  )
}
export default App
