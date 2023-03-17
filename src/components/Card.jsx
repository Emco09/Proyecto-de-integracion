import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../redux/action";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   const dispatch = useDispatch(); 
   const myFavorites = useSelector(state => state.myFavorites)
   const[isFav,setIsFav]=useState(false);

   const handleFavorite = ()  => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({name,gender,onClose,species,id,status,origin,image}))
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div>
      {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
      }
         <button onClick={()=>onClose(id) }>X</button>

         <Link to={`detail/${id}`}>
         <h2>Name:{name} </h2>
         </Link>
         
         <h2>Status:{status}</h2>
         <h2>Species:{species}</h2>
         <h2>Gender:{gender} </h2>
         <h2>Origin:{origin} </h2>

         <img src={image} alt={name} /> 
      </div>
   );
}
