import React from 'react'
import {  Link } from 'react-router-dom';
// import { Container, Row, Col} from "react-bootstrap"
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function ItemList()
{
    const MoviesList = 
    [
        {
            "itemID": 1, 
            "name": "Doctor Strange 1",
            "rating": 3,
            "price": 50, 
            "brand": "Nike"
        },
        {
            "itemID": 2, 
            "name": "Doctor Strange 2",
            "rating": 4,
            "price": 50, 
            "brand": "Nike"
        },
        {
            "itemID": 3, 
            "name": "Doctor Strange 3",
            "rating": 2,
            "price": 50, 
            "brand": "Nike"
        },
        {
            "itemID": 4, 
            "name": "Doctor Strange 4",
            "rating": 5,
            "price": 50, 
            "brand": "Nike"
        },
        {
            "itemID": 5, 
            "name": "Doctor Strange 5",
            "rating": 3,
            "price": 50, 
            "brand": "Nike"
        },
        {
            "itemID": 6, 
            "name": "Doctor Strange 6",
            "rating": 4,
            "price": 50, 
            "brand": "Nike"
        },
        {
            "itemID": 7, 
            "name": "Doctor Strange 7",
            "rating": 2,
            "price": 50, 
            "brand": "Nike"
        },
        {
            "itemID": 8, 
            "name": "Doctor Strange 8",
            "rating": 5,
            "price": 50, 
            "brand": "Nike"
        },
    ];

    const DisplayMoviesList = MoviesList.map( (ml) =>
            <Link to={`/item/${ml.name}`} state={{itemID:ml.itemID}} className="Itemcontainer transform">
                
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={"https://loremflickr.com/320/240?random=" + Math.random(100)}  width="100%" height="225"  class="bd-placeholder-img card-img-top" alt="..."/>
                                {/* <FavoriteIcon/>
                                <FavoriteBorderIcon/> */}
                                <div class="card-body">
                                    <h5 className='ItemTitle noneUnderline '>{ml.name}</h5>
                                    <p className='ByBrand colorBlack'>by <b>{ml.brand}</b></p>
                                    <small class="card-text graylight">This is a wider card ...</small>
                                    <div class="colorBlack d-flex justify-content-between align-items-center">
                                        <p className='noneUnderline'>$ <span className='price'>{ml.price}</span></p>
                                        <p class="text-muted">
                                            <span>{ml.rating}</span>
                                            <span className='fa-solid fa-star Iconstar'></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </Link>
    );
    return (
        <div className='moviesList col-md-9'>
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        
                    {DisplayMoviesList}

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ItemList;
