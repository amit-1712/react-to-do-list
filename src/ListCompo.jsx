
import React,{useState} from "react";
import "./styles.css";
import DeleteIcon from '@material-ui/icons/Delete';
const ListCompo = (props) =>{
    const[Line,setLine] = useState(false);
    const deletedClick = () =>{
        setLine(true);
    }

    return (
        <div className="todo-style">
        <span  onClick={deletedClick} style={{display:'inline', marginTop:"3px", textAlign:"left" }}>
            <DeleteIcon  className="deleteIcon"/>
        </span>

        <li className="listStyle"   style={{textDecoration:Line?"line-through" : "none"  , display:"inline" }}>{props.text}</li>
        </div>
    )
}

export default ListCompo;