import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
    const {myFavorites}=useSelector(state => state)
    return(
        <div>
            {
                myFavorites.map((character)=>{
                    return(
                        <div>
                                                
                            <Link to={`detail/${character.id}`}>
                            <h2>Name:{character.name} </h2>
                            </Link>
                            
                            <h2>Status:{character.status}</h2>
                            <h2>Species:{character.species}</h2>
                            <h2>Gender:{character.gender} </h2>
                            <h2>Origin:{character.origin} </h2>

                            <img src={character.image} alt={character.name} /> 
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Favorites;