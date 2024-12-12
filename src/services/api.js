const baseUrl = `https://playground.4geeks.com/todo`;

export const fetchUserTodos = (setTodos) => {
  fetch(`${baseUrl}/users/JoeDiaz`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      setTodos(response.todos);
    });
};

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

export const deleteTodo = (id) => {
  return fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
    method: "DELETE",
  });
};
