import React, { useState } from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ListCompo from "./ListCompo"
const ToDoList = () =>{
    const[item,setItem] = useState("");
    const[newItem,setNewItem] = useState([]);
    const updatedInput = (event) =>{
            setItem(event.target.value);
    }
    const newUpdate = () =>{
        setNewItem((preValue)=>{
            return [...preValue,item];
        });
        setItem(" ");


    }
    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <br/>
                <h1>To Do List</h1>
                <br/>
                <input type="text"   placeholder="Add a item"  onChange={updatedInput} value={item}/>
                <button className="newBtn" onClick={newUpdate} >
                    <AddRoundedIcon/>
                </button>

              

                <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush"  style={{listStyle:"none"}}>
                    {newItem.map((val,index)=>{
                        return <ListCompo  key={index} text={val} />;

                    })}
                    
                </ul>
                
                </div>
            </div>
        </div>
        </>
    )

}
export default ToDoList;