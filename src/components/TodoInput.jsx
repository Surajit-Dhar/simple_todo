
import { useState } from "react";

export const TodoInput = ({getData}) => {
    const [text ,setText] = useState("");

    return (
        <div>
            <input className ="fix" type="text"
            placeholder="Write Something"
            onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button className="plus" onClick={()=>{
              getData(text);
            }}>
            +</button>
        </div>
    );
};