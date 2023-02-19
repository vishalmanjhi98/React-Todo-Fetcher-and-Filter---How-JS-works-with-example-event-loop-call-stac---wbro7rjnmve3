import React,{useState} from "react";

const AddTodo = ({ dispatch }) => {

    const [taskArr,setTaskArr] =useState([]);
    const [inputVal,setVal] = useState("");
    const [DateId,setId] = useState( new Date().getTime().toString());

    function submitHandler (e) {
        e.preventDefault();  
        setId( new Date().getTime().toString()) ;
        setTaskArr(
            [...taskArr,
                {id:DateId,title:inputVal}
            ]
        )
        dispatch({type:"ADD",payload:{title:inputVal,id:DateId}});
        setVal("");
    }


    function inputFun(e) {
        setVal(e.target.value);
    }

    return (
        <>
        <form id="todo-form" onSubmit={submitHandler}>
            <input id="todo-input" type="textarea" required onChange={inputFun} value={inputVal}/>
            <button type="submit">submit</button>
        </form>
        </>
    )
}

export { AddTodo }