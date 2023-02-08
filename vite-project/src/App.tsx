import React, { useState, useEffect } from "react";
import BoxPicker from './Components/BoxPicker';
import BoxContext from './Components/BoxContext';
import axios from "axios";


let ACCESS_KEY = "WYABwphbfiRge6jE6BKRM50f-Hmowv63FEQoXRVx_VU";

function App() {
  const [selectedObject, setSelectedObject] = useState({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [images, setImages] = useState<[]>([]);
  const [value, setValue] = useState<string>("");

  const onSearch = async (searchTerm:string) => {
    const response = await axios.get(
      `https://api.unsplash.com/photos?query=${searchTerm}&client_id=${ACCESS_KEY}`
    );
    const data = await response.data;
    setImages(data);
    console.log(images);
    console.log("search term:", searchTerm);
  }

  const fetchAPI = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos?query=Japan&client_id=${ACCESS_KEY}`
    );
    const data = await response.data;
    setImages(data);
  };

  console.log(images);

  useEffect(() => {
    fetchAPI();
  }, []);


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
      value: value,
      setValue: setValue,
      onSearch: onSearch,
    }}>
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      {!isOpen && <button onClick={()=>{handleOpen()}}className="neumo p-7 text-gray-700 hover:drop-shadow-lg uppercase font-extrabold ">Press Here</button> }
      {isOpen && <BoxPicker/>}
    </div>
    </BoxContext.Provider>
  )
}

export default App
