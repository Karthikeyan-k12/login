const initialState = {
  users: [],
  loggedInUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'LOGIN_USER':
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;