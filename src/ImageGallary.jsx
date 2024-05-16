import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Components/Card'


function ImageGallary() {
    
  
//    console.log(data,"jkwefkwek");
    // const images = useSelector((store)=>store.Images.image);

    // if(images && Array.isArray(Images)){

    //    images.forEach((data)=>{
    //     console.log(data,"Image Gallary")
    //    })
       
       
    // }
  const images = useSelector((state) => state.Images.Image); // Correct selector to access Image slice
  const bgImage = useSelector((state) => state.Images.bg);
  
  
//   console.log(bgImage)
    return (
    <div className=' flex justify-evenly' style={{backgroundImage:`url(${bgImage})`,backgroundSize: 'cover'}} >
      <div className='  CardContainer max-w-screen grid grid-cols-4 gap-6' style={{backgroundImage:`url(${bgImage})`,backgroundSize: 'cover'}} >
      {
        images && Array.isArray(images) && images.map((image)=>(

        <Card key={image.id} src={image.largeImageURL}  />
        
        ))
        
      }
      
       </div>
    </div>
  )
}

export default ImageGallary
