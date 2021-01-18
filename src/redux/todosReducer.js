export const todos = (state = { isLoading: true, errMess: null, todos:[]}, action) => {
    switch (action.type) {
        case "ADD_TODOS":
            return {...state, isLoading: false, errMess: null, todos: action.payload};

        case "TODOS_LOADING":
            return {...state, isLoading: true, errMess: null, todos: []}

        case "TODOS_FAILED":
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};