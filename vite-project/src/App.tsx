import { useState } from 'react'
import './App.css'

function App() {
  const [selectedObject, setSelectedObject] = useState({});

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <button className="neumo p-7 text-gray-700 hover:drop-shadow-lg uppercase font-extrabold ">Press Here</button>
      <h1></h1>
    </div>
  )
}

export default App
