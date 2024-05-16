import { createSlice } from "@reduxjs/toolkit";


const ImageSlice = createSlice({
    name:"image",
    initialState:{
        Image:null,
        bg:null
    },
    reducers:{
        setImage:(state,actions)=>{
            state.Image = actions.payload
        },
        setBg:(state,actions)=>{
            state.bg = actions.payload
        }
    }
     
});
export const {setImage,setBg} = ImageSlice.actions; 
export default ImageSlice.reducer;