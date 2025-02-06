import React from "react";
import CardList from "./CardList";
import S from './SData.json';

function App(){

  const data = S;
  console.log(data);
    return(
        <>
        <h1>App</h1>
        <CardList profile = {data}/>
        </>
    )

}
export default App;