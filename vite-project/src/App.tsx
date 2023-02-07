import { useState } from 'react'
import BoxPicker from './Components/BoxPicker';
import BoxContext from './Components/BoxContext';

function App() {
  const [selectedObject, setSelectedObject] = useState({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }


  return (
    <BoxContext.Provider
    value={{
      selectedObject: selectedObject,
      setSelectedObject: setSelectedObject,
    }}>
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      {!isOpen && <button onClick={()=>{handleOpen()}}className="neumo p-7 text-gray-700 hover:drop-shadow-lg uppercase font-extrabold ">Press Here</button> }
      {isOpen && <BoxPicker/>}
    </div>
    </BoxContext.Provider>
  )
}

export default App
