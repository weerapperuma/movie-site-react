import {useState} from "react";

const Card = ({title,rating,isCool}) =>{
    const [hasLiked,setHasLiked]=useState(false);
    return(
        <div className={'card'}>
            <h2>{title}</h2>
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