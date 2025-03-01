import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import financeReducer from "./reducers/financeReducer"; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    finance: financeReducer, 
  },
});

export default store;
