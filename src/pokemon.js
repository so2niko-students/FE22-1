import { useState } from "react";

export default function Pokemon({ image, number, weight, name, height }){
    const [likes, setLikes] = useState(0);
    console.count(name);

    const addLike = () => setLikes(likes + 1);

    return (
        <div>
            <img src={ image } alt={ name }/>
            <h3>{ name }</h3>
            <p>#{ number } in DB</p>
            <p>{ weight } { height }</p>
            <button onClick={ addLike }>Like : { likes }</button>
        </div>
    );
}