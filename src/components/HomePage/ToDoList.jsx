import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { deleteTodo, deleteUser, fetchUsers, fetchUserTodos, postTodo, postUser } from "../../services/api";

const ToDoList = () => {
  const [users, setUsers] = useState([])
  const [inputUser, setInputUser] = useState("")
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTodoHovered, setIsTodoHovered] = useState("");
  const [isUserHovered, setIsUserHovered] = useState("");

  // useEffect importa usuarios y tareas (de mi usuario) desde la API
  useEffect(() => {
    fetchUsers(setUsers)
    fetchUserTodos(setTodos)
  }, []);

  // función para añadir usuario a lista API de usuarios
  const addUser = (e) => {
    if (e.key === "Enter" && inputUser.trim() !== "") {
      postUser(inputUser)
        .then((data) => {
          setUsers([...users, { name: inputUser }])
          console.log(`Nuevo objeto añadido:`, data);
          setInputUser("")
        })
    }
  }

  //función para borrar usuario de la lista API de usuarios
  const removeUser = (name) => {
    deleteUser(name)
      .then(() => {
        fetchUsers(setUsers)
      })
  }


  // función que recibe el input de la tarea a añadir a mi usuario
  const agregarTarea = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      postTodo(inputValue)
        .then(() => {
          fetchUserTodos(setTodos);
          setInputValue("");
        });
    }
  }

  // función que remueve tarea de mi usuario
  const removerTarea = (id) => {
    deleteTodo(id)
      .then(() => {
        fetchUserTodos(setTodos);
      })
  }


  return (
    <Container className="caja row font-monospace">
      <div className="col-6">
        <h2>Users List</h2>
        <input className="rounded border border-4 mb-2" type="text" placeholder="Create new user" value={inputUser} onKeyDown={(e) => addUser(e)}
          onChange={(e) => setInputUser(e.target.value)} />
        <div>
          {users.map((person) => {
            return (
              <div className="usuario bg-danger-subtle border border-black rounded mb-1" key={person.id} onMouseEnter={() => setIsUserHovered(person.name)}
                onMouseLeave={() => setIsUserHovered("")} >{person.name} <span
                  className="float-end me-3 fw-bold"
                  role="button"
                  style={{
                    visibility: isUserHovered === person.name ? "visible" : "hidden",
                  }}
                  onClick={() => removeUser(person.name)}
                >
                  X
                </span></div>
            )
          })}
        </div>
      </div>
      <div className="col-6">
        <h2>JoeDiaz's To Do List</h2>
        <input
          className="mb-2 rounded border border-4"
          type="text"
          placeholder="Introduce new task"
          value={inputValue}
          onKeyDown={(e) => agregarTarea(e)}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <div>
          {isEmpty(todos) ? (
            <div className="tarea bg-warning-subtle border border-black rounded mb-1">
              No tasks added
            </div>
          ) : (
            todos.map((task) => {
              return (
                <div
                  key={task.id}
                  className="tarea bg-info-subtle border border-black rounded mb-1"
                  onMouseEnter={() => setIsTodoHovered(task.id)}
                  onMouseLeave={() => setIsTodoHovered("")}
                >
                  {task.label}
                  <span
                    className="float-end me-3 fw-bold"
                    role="button"
                    style={{
                      visibility: isTodoHovered === task.id ? "visible" : "hidden",
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
      </div>

    </Container>
  );
};

export default ToDoList;
