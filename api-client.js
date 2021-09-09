const baseUrl = "http://localhost:3000";

const postTodo = async function (post) {
  await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getTodos = async () => {
  let response = await fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  response = await response.json();
  return response;
};

const deleteTodo = async (id) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
