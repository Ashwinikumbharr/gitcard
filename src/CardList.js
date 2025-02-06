import React from "react";
import Card from "./Card";

function CardList(Props)
{
    const pr = Props.profile;
    return(
        <>
        <h1>List of card</h1>
        {
            pr.map((p,id)=>
            {
                return <Card {...p} key={id} />
            })
        }
        </>
    )

}
export default CardList;