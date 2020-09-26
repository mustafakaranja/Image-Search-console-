import './imageList.css';
import React from 'react';
import Imagecard from "./Imagecard";

const Imagelist = (props) =>{
     const image = props.image.map(image => {

         return (
             <div className = "ui segment" key={image.id}>
            <Imagecard key={image.id} image={image} />
            likes: {image.likes}
         </div>
          )
        })

    return <div className="image-list">{image}</div>

}

export default Imagelist;