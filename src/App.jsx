import React, {useEffect, useState} from 'react'
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method:'GET',
    headers: {
        accept: 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    }
};

const App = () => {
    const [searchTerm,setSearchTerm] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // console.log("API Key:", import.meta.env.VITE_TMDB_API_KEY);

    const fetchMovies = async ()=>{
        setIsLoading(true);
        setErrorMessage('');
        try {
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint,API_OPTIONS);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if(data.Response==='False'){
                setErrorMessage(data.Error||'Failed to fetch movies');
                setMovieList([]);
                return;
            }
            setMovieList(data.results || []);
        }catch (error){
            console.error(`Error fetching movies ${error.message}`);
            setErrorMessage('Error fetching movies please try again later');
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="/hero.png" alt="Hero Banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </header>
                <section className="all-movies">
                    <h2 className="mt-[20px]">All Movies</h2>

                    {isLoading ? (
                        <Spinner/>
                    ):(
                        <ul>
                            {movieList.map((movie) =>(
                                <p key={movie.id} className="text-white">{movie.title}</p>
                                )
                            )}
                        </ul>
                    )}
                </section>

                <h1 className="text-white">{searchTerm}</h1>
            </div>
        </main>
    )
}
export default App
