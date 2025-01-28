import {useEffect, useState} from "react";

const Card = ({title,rating,isCool}) =>{
    const [count,setCount] = useState(0);
    const [hasLiked,setHasLiked]=useState(false);

    useEffect(() => {
        console.log(`${title} has been liked ${hasLiked}`);
    },[hasLiked]);

    useEffect(() => {
        console.log("CARD RENDERED")
    }, []);

    return(
        <div className='card' onClick={()=>setCount(count+1)}>
            <h2>{title}><br/>{count||null}</h2>
            <p>Rating : {rating}</p>
            <p>is Cool : {isCool?"Cool":"not Cool"}</p>

            <button onClick={()=>setHasLiked(!hasLiked)}>
                {hasLiked ? '❤️':'🤍'}
            </button>
        </div>
    )
}
const App = () =>{

    const [hideAllMovies,setHasLiked]=useState(false);

    return(
        <div className={"card-container"}>
            <Card title="Star Wars" rating={5} isCool={true}/>
            <Card title="Avatar" rating={4} isCool={false}/>
            <Card title="The Lion King" rating={9} isCool={true}/>
        </div>

    )
}

export default App