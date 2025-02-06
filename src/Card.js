import React from "react";

function Card(props)
{
    return(
        <>
        <h1>Card</h1>
        <ul>
            <li>{props.login}</li>
            <li>{props.id}</li>
            <li><img src={props.avatar_url} /></li>
            <li>< a href={props.html_url} >clickme</a></li>
            
        </ul>
        </>
    )

}
export default Card;