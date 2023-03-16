import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InfoPage } from './InfoPage';
import './Styles.css'

import loading from './projecter.gif'
function Search() {

    const [isLoading, setIsLoading] = useState(false)

    const [name, setName] = useState("")
    const handleInput = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    const [movies, setMovies] = useState([])

    const handleFetch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.get(`https://www.omdbapi.com/?s=${name}&apikey=72bdb388`)

            .then(
                (res) => {
                    console.log(res);
                    setMovies(res.data.Search);
                })
            .catch((error) => {
                return (error)
            })

        setIsLoading(false);
    }


    const handleClick = (e) => {
        console.log(e.target.id);
        <InfoPage v={e.target.id} />
    }

    return (
        <div className="App">
            <div className="navbar">
                <h1>Movie App</h1>
                <div className='inp'>
                    <input type="text" value={name} placeholder='Enter the movie name' onChange={handleInput} className='inpBox'/>
                    <button className='btn' onClick={handleFetch} >Fetch Movie</button>

                </div>
            </div>
            <div className='movies' >
                <div className='load' >
                    {isLoading && <img src={loading} alt="Loading" style={{height: 250 ,width : 250 }}/>}
                </div>
                {movies ? movies.map((movie) => {
                    return (
                        <div className='movieCard' key={movie.imdbID}  >
                            <img src={movie.Poster} alt="" />
                            <h5>{movie.Title}</h5>
                            <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleClick} >Click here for more info</Link>
                        </div>
                    )
                }) : <h1 className='none'> No movies found </h1>
                }
            </div>
        </div>
    );
}

export default Search;
