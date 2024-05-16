import React, { useEffect } from 'react'
import { setBg } from '../Store/ImageSlice'
import { useDispatch } from 'react-redux';


function Card({src}) {
    const dispatch = useDispatch();
    console.log(src,"from card!");

    function handleClick(){
        dispatch(setBg(src))
    }
    
  return (
   <>
    <div className=' border border-black border-solid w-50 h-60'>

        <img className=' object-cover w-full h-1/2' src={src} onCanPlay={handleClick}/>
        <div className=' flex justify-center relative top-10'>
            <button onClick={handleClick} className='p-1 rounded-full bg-slate-600'>Click</button>
        </div>

    </div>
   </>
  )
}

export default Card
