const baseUrl = `https://playground.4geeks.com/todo`;
const usersUrl = `${baseUrl}/users`;
const todosUrl = `${baseUrl}/todos`;

// función para importar lista de users desde la API
export const fetchUsers = (setUsers) => {
  fetch(`${usersUrl}`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      setUsers(data.users);
    });
};

//función para añadir user a lista API
export const postUser = (inputUser) => {
  return fetch(`${usersUrl}/${inputUser}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

//función para borrar user de la lista API con fetch
export const deleteUser = (name) => {
  return fetch(`${usersUrl}/${name}`, {
    method: "DELETE",
  });
};

// función para importar las tareas de mi usuario
export const fetchUserTodos = (setTodos) => {
  fetch(`${usersUrl}/JoeDiaz`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((response) => {
      setTodos(response.todos);
    });
};

//función para añadir tarea a mi usuario
export const postTodo = (inputValue) => {
  return fetch(`${todosUrl}/JoeDiaz`, {
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
  return fetch(`${todosUrl}/${id}`, {
    method: "DELETE",
  });
};
