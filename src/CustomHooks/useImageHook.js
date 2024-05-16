import axios from 'axios';

export async function useImageHook() {
   
   try {
     const response = await axios.get("https://pixabay.com/api/?key=43417943-552de64dfb30b6102af28d247&q=yellow+flowers&image_type=photo");
     
     return response.data.hits;
   
     
   } catch (error) {
     console.error('Error fetching images:', error);
     throw error; // Re-throw the error to propagate it
   }
}
