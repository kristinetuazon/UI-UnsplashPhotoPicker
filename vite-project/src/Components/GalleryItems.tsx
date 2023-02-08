import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {};
let ACCESS_KEY = "WYABwphbfiRge6jE6BKRM50f-Hmowv63FEQoXRVx_VU";

const GalleryItems = (props: Props) => {
    const [images, setImages] = useState<[]>([]);
    
    const fetchAPI = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/photos?query=food&client_id=${ACCESS_KEY}`
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
        return <div className="pictureBox border-2 shadow-md hover:shadow-xl border-gray-500 rounded-lg hover:border-b-rose-500" id={photoObject.id}><a href={photoObject.links.html}><img className="object-cover w-full h-full" src={photoObject.urls.small_s3} alt=""/></a></div>
    })

    return <>
    {imageElements};
    </>
};

export default GalleryItems;