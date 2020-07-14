const initialState = {
  logged: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, logged: true };
    case 'LOGOUT':
      return { ...state, logged: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
