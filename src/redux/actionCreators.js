import { baseUrl } from '../shared/baseUrl';

export const fetchTodos = () => (dispatch) => {

    return fetch(baseUrl + 'todos/?_limit=20')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(todos => dispatch(addTodos(todos)))
    .catch(error => dispatch(todosFailed(error.message)));
}

export const todosLoading = () => ({
    type: "TODOS_LOADING"
});

export const todosFailed = (errmess) => ({
    type: "TODOS_FAILED",
    payload: errmess
});

export const addTodos = (todos) => ({
    type: "ADD_TODOS",
    payload: todos
});

export const postTodo = (name, description) => (dispatch) => {
  const newTodo = {
      name: name,
      description: description
  };
  
  return fetch(baseUrl + 'todos', {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addTodos(response)))
  .catch(error =>  { console.log('post todos', error.message); alert('Your todo could not be posted\nError: '+error.message); });
};

export const deleteTodo = (todoId) => (dispatch) => {
  
  return fetch(baseUrl + 'todos/' + todoId, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(fetchTodos()))
  .catch(error =>  { console.log('post todos', error.message); alert('Your todo could not be deleted\nError: '+error.message); });
};

export const putTodo = (todoId ,name, description) => (dispatch) => {
  const newTodo = {
      name: name,
      description: description
  };
  
  return fetch(baseUrl + 'todos/'+ todoId, {
      method: "PUT",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(fetchTodos()))
  .catch(error =>  { console.log('put todos', error.message); alert('Your todo could not be updated\nError: '+error.message); });
};