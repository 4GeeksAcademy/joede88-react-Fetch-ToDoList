const baseUrl = `https://playground.4geeks.com/todo`;

// función para importar lista de users desde la API
export const fetchUsers = (setUsers) => {
  fetch(`${baseUrl}/users`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setUsers(data.users);
    });
};

//función para añadir user a lista API
export const postUser = async (inputUser) => {
  try {
    const response = await fetch(`${baseUrl}/users/${inputUser}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error("Error al realizar la solicitud:", error); // Manejar errores
  }
};

//función para borrar user de la lista API con fetch
export const deleteUser = (name) => {
  return fetch(`${baseUrl}/users/${name}`, {
    method: "DELETE",
  });
};

// función para importar las tareas de mi usuario
export const fetchUserTodos = (setTodos) => {
  fetch(`${baseUrl}/users/JoeDiaz`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((response) => {
      setTodos(response.todos);
    });
};

//función para añadir tarea a mi usuario
export const postTodo = (inputValue) => {
  return fetch(`${baseUrl}/todos/JoeDiaz`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      label: inputValue,
      is_done: false,
    }),
  });
};

// función para borrar tarea
export const deleteTodo = (id) => {
  return fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
    method: "DELETE",
  });
};
