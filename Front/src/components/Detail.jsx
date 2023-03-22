import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = ()=> {
    const {detailId} = useParams();
    const [character,setCharacter]=useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    
    return(
        <div>
            <button>
                <Link to="Home" >Home</Link>
            </button>
            <h1>{character.Name}</h1>
            <h1>{character.Status}</h1>
            <h1>{character.Specie}</h1>
            <h1>{character.Gender}</h1>
            <h1>{character.Origin}</h1>
            <img src={character.Image} alt="" />
        </div>
    )

}
export default Detail;