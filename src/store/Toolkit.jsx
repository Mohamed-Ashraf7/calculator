import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    prevValue: "",
    currentValue: "0",
    operation: "",
    overwrite: true,
  },
  reducers: {
    setPrevValue: (state, action) => {
      state.prevValue = action.payload;
    },
    setCurrentValue: (state, action) => {
      state.currentValue = action.payload;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
    setOverwrite: (state, action) => {
      state.overwrite = action.payload;
    },
    clear: (state) => {
      state.prevValue = "";
      state.operation = "";
      state.currentValue = "0";
      state.overwrite = true;
    },
    del: (state) => {
      if (state.currentValue.length === 1) {
        state.currentValue = "0";
        state.overwrite = true;
      } else {
        state.currentValue = state.currentValue.slice(0, -1);
      }
    },
    percent: (state) => {
      const curr = parseFloat(state.currentValue);
      state.currentValue = (curr / 100).toString();
    },
    equals: (state) => {
      const val = calculate(state);
      state.currentValue = `${val}`;
      state.prevValue = "";
      state.operation = "";
      state.overwrite = true;
    },
  },
});

export const calculate = (state) => {
  if (!state.prevValue || !state.operation) return state.currentValue;
  const curr = parseFloat(state.currentValue);
  const prev = parseFloat(state.prevValue);
  let result;
  switch (state.operation) {
    case "÷":
      result = prev / curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "+":
      result = prev + curr;
      break;
    default:
      break;
  }
  return result;
};
export const {
  setPrevValue,
  setCurrentValue,
  setOperation,
  setOverwrite,
  clear,
  del,
  percent,
  equals,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
