import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const GalleryItems = (props: Props) => {
    const [images, setImages] = useState<[]>([]);
    
    const fetchAPI = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/photos?query=japan&client_id=${ACCESS_KEY}`
      );
      const data = await response.data;
      setImages(data);
    };

    console.log(images);
    
    useEffect(() => {
      fetchAPI();
    }, []);

    const imageElements = images.map((photoObject)=>{
        console.log(photoObject.id);
        return <div id={photoObject.id}>GalleryItems</div>
    })

  return <div></div>;
};

export default GalleryItems;