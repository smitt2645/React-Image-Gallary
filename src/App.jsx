import React, { useEffect } from 'react'
import './index.css'
import ImageGallary from './ImageGallary'
import { useDispatch } from 'react-redux'
import { useImageHook } from './CustomHooks/useImageHook'
import { setImage } from './Store/ImageSlice'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      // Call the useImageHook function
      useImageHook()
          .then(data => {
              // Handle the fetched data
              console.log("Fetched data:", data);
              dispatch(setImage(data));
              
          })
          .catch(error => {
              // Handle errors
              console.error('Error:', error);
          });
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <div className='Container max-w-[1366] border border-black border-solid'>
        <div className='Heading flex justify-center text-center'>
          <div className='Text '>List Items</div>
        </div>
       <div className=''>
          <ImageGallary />
       </div>
      </div>
      </>
  )
}

export default App
