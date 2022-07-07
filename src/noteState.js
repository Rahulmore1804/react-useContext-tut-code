import noteContext from "./noteContext";


function NoteState(props){
    const state = {"a":"b","c":"d"}
    return(
       <noteContext.Provider value={state}>{props.children} </noteContext.Provider> 
    )
}

export default NoteState