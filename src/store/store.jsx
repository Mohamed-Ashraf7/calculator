import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./Toolkit";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;
