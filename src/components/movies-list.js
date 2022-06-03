import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Container, Row, Col} from "react-bootstrap"

function MoviesLists()
{
    const MoviesList = [
        {
            "movieId": 1, 
            "name": "Doctor Strange 1",
            "rating": 3
        },
        {
            "movieId": 2, 
            "name": "Doctor Strange 2",
            "rating": 4
        },
        {
            "movieId": 3, 
            "name": "Doctor Strange 3",
            "rating": 2
        },
        {
            "movieId": 4, 
            "name": "Doctor Strange 4",
            "rating": 5
        },
        {
            "movieId": 5, 
            "name": "Doctor Strange 5",
            "rating": 3
        },
        {
            "movieId": 6, 
            "name": "Doctor Strange 6",
            "rating": 4
        },
        {
            "movieId": 7, 
            "name": "Doctor Strange 7",
            "rating": 2
        },
        {
            "movieId": 8, 
            "name": "Doctor Strange 8",
            "rating": 5
        },
    ];

    const DisplayMoviesList = MoviesList.map( (ml) =>
        <Col>
            <Link to={`/movies/${ml.movieId}`} state={{movieId:ml.movieId}}>
                <ul>
                    <li>
                        <img alt='Movie' src={"https://loremflickr.com/320/240?random=" + Math.random(100)} with={200} height={200}/>
                    </li>
                    <li>
                        {ml.name}
                    </li>
                    <li>
                        Rating: {ml.rating}
                    </li>
                </ul>
            </Link>
        </Col>
    );
    return (
        <>
        <div className='moviesList'>
            <Container>
                <Row>
                {DisplayMoviesList}

                </Row>
                </Container>
            <Outlet/>

        </div>
        </>
    )
}


export default MoviesLists;
