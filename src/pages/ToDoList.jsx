import { isEmpty } from "lodash";
import { useState } from "react";
import { Container } from "react-bootstrap";

const ListaTareas = [];

const ToDoList = () => {
    const [newList, setNewList] = useState(ListaTareas);
    const [inputValue, setInputValue] = useState("");
    const [isHovered, setIsHovered] = useState("");
    function agregarTarea(e) {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            setNewList([...newList, { tarea: inputValue, id: crypto.randomUUID() }]);
            setInputValue("");
            console.log(newList);
        }
    }

    function removerTarea(id) {
        setNewList(
            newList.filter((task) => {
                return task.id !== id;
            }),
        );
    }

    return (
        <Container className="caja font-monospace">
            <h2>To Do List</h2>
            <input
                className="mb-2 rounded border border-4"
                type="text"
                placeholder="Introduce new task"
                value={inputValue}
                onKeyDown={(e) => agregarTarea(e)}
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <div>
                {isEmpty(newList) ? (
                    <div className="tarea bg-warning-subtle border border-black rounded mb-1">
                        No tasks added
                    </div>
                ) : (
                    newList.map((task) => {
                        return (
                            <div
                                key={task.id}
                                className="tarea bg-info-subtle border border-black rounded mb-1"
                                onMouseEnter={() => setIsHovered(task.id)}
                                onMouseLeave={() => setIsHovered("")}
                            >
                                {task.tarea}
                                <span
                                    className="float-end me-3 fw-bold"
                                    role="button"
                                    style={{
                                        visibility: isHovered === task.id ? "visible" : "hidden",
                                    }}
                                    onClick={() => removerTarea(task.id)}
                                >
                                    X
                                </span>{" "}
                            </div>
                        );
                    })
                )}
            </div>
        </Container>
    );
};

export default ToDoList;
