import React from 'react';
import { Outlet, Link} from "react-router-dom";
import { useLocation} from "react-router-dom";

function Item()
{
    const location = useLocation();
    const {itemID} = location.state;
    const MovieDetails = 
    [
        {
            "itemID": 1, 
            "name": "Doctor Strange 1",
            "rating": 3,
            "price": 50, 
            "brand": "Nike",
            "description": "abchmnankjij jijscn m ajsdn nkasdi c"
        },
        {
            "itemID": 2, 
            "name": "Doctor Strange 2",
            "rating": 4,
            "price": 50, 
            "brand": "Nike",
            "description": "abchmnankjij jijscn m ajsdn nkasdi c"
        },
        {
            "itemID": 3, 
            "name": "Doctor Strange 3",
            "rating": 2,
            "price": 50, 
            "brand": "Nike",
            "description": "abchmnankjij jijscn m ajsdn nkasdi c"
        },
        {
            "itemID": 4, 
            "name": "Doctor Strange 4",
            "rating": 5,
            "price": 50, 
            "brand": "Nike",
            "description": "abchmnankjij jijscn m ajsdn nkasdi c"
        },
        {
            "itemID": 5, 
            "name": "Doctor Strange 5",
            "rating": 3,
            "price": 50, 
            "brand": "Nike",
            "description": "abchmnankjij jijscn m ajsdn nkasdi c"
        },
        {
            "itemID": 6, 
            "name": "Doctor Strange 6",
            "rating": 4,
            "price": 50, 
            "brand": "Nike",
            "description": "abchmnankjij jijscn m ajsdn nkasdi c"
        },
        {
            "itemID": 7, 
            "name": "Doctor Strange 7",
            "rating": 2,
            "price": 50, 
            "brand": "Nike",
            "description": "abchmnankjij jijscn m ajsdn nkasdi c"
        },
        {
            "itemID": 8, 
            "name": "Doctor Strange 8",
            "rating": 5,
            "price": 50, 
            "brand": "Nike",
            "description": "abchmnankjij jijscn m ajsdn nkasdi c"
        },
    ];
    function GetMovie(m)
    {
        return(m.itemID===itemID);
    }
    const MovieCur = MovieDetails.filter(GetMovie)
    const displayMovie = MovieCur.map((mv) =>(
        <div className='moviesList'>
            <img alt='movie' src={"https://loremflickr.com/320/240?random=" + Math.random(100)} with={350} height={350}/>
            <h3>{mv.name}</h3>
            <p>{mv.description}</p>
            <Link to={`/movies/${mv.itemID}/review`}>Add Reviews</Link>
        </div>
    ))
    return (
        <>
        {displayMovie}
        
        <Outlet/>
        </>
    )
}

export default Item;
