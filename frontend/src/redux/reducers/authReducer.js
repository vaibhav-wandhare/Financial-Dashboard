const initialState = {
    isLoggedIn: false,
    user: null,
    token: localStorage.getItem("token") || null, 
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        localStorage.setItem("token", action.payload.access); 
        return { ...state, isLoggedIn: true, user: action.payload.user, token: action.payload.access };
  
      case "LOGIN_FAILURE":
        return { ...state, error: action.payload };
  
      case "LOGOUT":
        localStorage.removeItem("token"); 
        return { ...state, isLoggedIn: false, user: null, token: null };
  
      default:
        return state;
    }
  }
  