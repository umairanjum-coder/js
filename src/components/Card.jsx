import Count from "./Count"; 
import Countbuttons from "./CountButtons";
import Reset from "./Reset";
import Title from "./Title";
import { useState } from "react";

export default function Card(){
    const [count,setCount] = useState(0);   

// import "./App.css";
return(<>
  <div className="card">
       <Title/>
      <Count count={count}/>
      <Reset setCount={setCount}/>
      <Countbuttons count={count} setCount={setCount}/>
      </div>
  </>)
}