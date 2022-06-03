import React from 'react';
import { Outlet, Link} from "react-router-dom";
import { useLocation} from "react-router-dom";

function Movie()
{
    const location = useLocation();
    const {movieId} = location.state;
    const MovieDetails =
    [
        {
            "movieId": 1, 
            "name": "Doctor Strange 1",
            "rating": 3,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh leo, dignissim et tortor maximus, tristique facilisis lorem. Suspendisse congue neque sed faucibus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a enim arcu. Aliquam nec tellus nec libero interdum cursus at sed ante. Nulla rutrum nisl sit amet blandit consequat. Phasellus interdum dui non scelerisque malesuada. Cras at gravida quam. Cras et tristique lacus."
        },
        {
            "movieId": 2, 
            "name": "Doctor Strange 2",
            "rating": 4,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh leo, dignissim et tortor maximus, tristique facilisis lorem. Suspendisse congue neque sed faucibus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a enim arcu. Aliquam nec tellus nec libero interdum cursus at sed ante. Nulla rutrum nisl sit amet blandit consequat. Phasellus interdum dui non scelerisque malesuada. Cras at gravida quam. Cras et tristique lacus."

        },
        {
            "movieId": 3, 
            "name": "Doctor Strange 3",
            "rating": 2,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh leo, dignissim et tortor maximus, tristique facilisis lorem. Suspendisse congue neque sed faucibus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a enim arcu. Aliquam nec tellus nec libero interdum cursus at sed ante. Nulla rutrum nisl sit amet blandit consequat. Phasellus interdum dui non scelerisque malesuada. Cras at gravida quam. Cras et tristique lacus."

        },
        {
            "movieId": 4, 
            "name": "Doctor Strange 4",
            "rating": 5,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh leo, dignissim et tortor maximus, tristique facilisis lorem. Suspendisse congue neque sed faucibus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a enim arcu. Aliquam nec tellus nec libero interdum cursus at sed ante. Nulla rutrum nisl sit amet blandit consequat. Phasellus interdum dui non scelerisque malesuada. Cras at gravida quam. Cras et tristique lacus."
        },
        {
            "movieId": 5, 
            "name": "Doctor Strange 5",
            "rating": 3,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh leo, dignissim et tortor maximus, tristique facilisis lorem. Suspendisse congue neque sed faucibus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a enim arcu. Aliquam nec tellus nec libero interdum cursus at sed ante. Nulla rutrum nisl sit amet blandit consequat. Phasellus interdum dui non scelerisque malesuada. Cras at gravida quam. Cras et tristique lacus."
        },
        {
            "movieId": 6, 
            "name": "Doctor Strange 6",
            "rating": 4,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh leo, dignissim et tortor maximus, tristique facilisis lorem. Suspendisse congue neque sed faucibus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a enim arcu. Aliquam nec tellus nec libero interdum cursus at sed ante. Nulla rutrum nisl sit amet blandit consequat. Phasellus interdum dui non scelerisque malesuada. Cras at gravida quam. Cras et tristique lacus."

        },
        {
            "movieId": 7, 
            "name": "Doctor Strange 7",
            "rating": 2,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh leo, dignissim et tortor maximus, tristique facilisis lorem. Suspendisse congue neque sed faucibus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a enim arcu. Aliquam nec tellus nec libero interdum cursus at sed ante. Nulla rutrum nisl sit amet blandit consequat. Phasellus interdum dui non scelerisque malesuada. Cras at gravida quam. Cras et tristique lacus."

        },
        {
            "movieId": 8, 
            "name": "Doctor Strange 8",
            "rating": 5,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh leo, dignissim et tortor maximus, tristique facilisis lorem. Suspendisse congue neque sed faucibus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a enim arcu. Aliquam nec tellus nec libero interdum cursus at sed ante. Nulla rutrum nisl sit amet blandit consequat. Phasellus interdum dui non scelerisque malesuada. Cras at gravida quam. Cras et tristique lacus."
        },
    ]
    function GetMovie(m)
    {
        return(m.movieId===movieId);
    }
    const MovieCur = MovieDetails.filter(GetMovie)
    const displayMovie = MovieCur.map((mv) =>(
        <div className='moviesList'>
            <img alt='movie' src={"https://loremflickr.com/320/240?random=" + Math.random(100)} with={350} height={350}/>
            <h3>{mv.name}</h3>
            <p>{mv.description}</p>
            <Link to={`/movies/${mv.movieId}/review`}>Add Reviews</Link>
        </div>
    ))
    return (
        <>
        {displayMovie}
        <Outlet/>
        </>
    )
}

export default Movie;
