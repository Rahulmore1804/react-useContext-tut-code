
import React, { useContext } from "react";
import noteContext from "./noteContext";
// import NoteState from "./noteState";

const b = "dcd"

function Ab(){
    const a = useContext(noteContext)
    return(
        <div>   
{a.a}
        </div>
    )
}

export {b}
export default Ab