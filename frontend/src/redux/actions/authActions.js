import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:8000/api/login/", { username, password });
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
    localStorage.setItem("token", data.access);
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: "Invalid credentials" });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};
