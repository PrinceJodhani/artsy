export const search = async (query) =>{
   const apiUrl = `https://api.artic.edu/api/v1/artworks/search`;

const qs = `?q=${query}&limit=30?fields=id,title,image_id,thumbnail`;


   const res = await fetch(apiUrl + qs);

   if (!res.ok) {
     throw new Error("api data not found");
   }
   else{
   return res.json();
   }


//    fetch(apiUrl)
//    .then(res=>{
//         if(!res.ok){
//             throw new Error('api data not found');
//         }
//         return res.json();
//    })
//    .then(results=>{

//    })
//    .catch(err=>{
//     console.log(err);
//    })

}