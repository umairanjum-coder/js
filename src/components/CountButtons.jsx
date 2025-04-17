import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";
export default function Countbuttons({setCount,count}){
    // import "./App.css";
    return(<>
        <div className="button-container">
          <button className="count-btn" onClick={() => {if (count >0 )setCount(count-1)}}><MinusIcon className="count-btn-icon"/></button>
          <button className="count-btn" onClick={() => setCount(count+1)}><PlusIcon className="count-btn-icon"/></button>
        </div>
    
      </>)
    }