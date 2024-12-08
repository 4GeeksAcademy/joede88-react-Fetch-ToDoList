import { useState } from "react";
import { Container } from "react-bootstrap";

const ListaTareas = []

const ToDoList = () => {
    const [newList, setNewList] = useState(ListaTareas)
    const [inputValue, setInputValue] = useState("")
    function agregarTarea(e) {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            setNewList([...newList, { tarea: inputValue, id: crypto.randomUUID() }])
            setInputValue("")
            console.log(newList);
        }
    }

    function removerTarea(id) {
        setNewList(
            newList.filter((task) => {
                return task.id !== id
            })
        )
    }

    return (
        <Container className="caja">
            <h2>To Do List</h2>
            <input className="mb-2 rounded" type="text" placeholder="Introduce new task" value={inputValue} onKeyDown={(e) => agregarTarea(e)} onChange={(e) => setInputValue(e.target.value)}></input>
            {newList.map((task) => {
                return (
                    <div key={task.id} className="tarea border border-info rounded mb-1">{task.tarea}<span className="float-end me-3" onClick={() => removerTarea(task.id)}>X</span> </div>
                )
            })}
        </Container>
    )
}

export default ToDoList;