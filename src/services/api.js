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
