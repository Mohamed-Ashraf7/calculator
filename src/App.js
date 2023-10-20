import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button,Container,CssBaseline,Grid} from "@mui/material";
import { setPrevValue,calculate,setCurrentValue,setOperation,setOverwrite,clear,
  del,
  percent,
  equals,
} from "./store/Toolkit";
import { OutputContainer,CalculatorBase,OperationText,main,calcStyle  } from './componentes/Styled.jsx';
import DigitButton from "./componentes/DigitButton";
import OperationBtn from "./componentes/OperationBtn";
import GridSystem from "./componentes/GridSys";
function App() {
  const dispatch = useDispatch();
  const { prevValue, currentValue, operation, overwrite } = useSelector(
    (state) => state.calculator
  );
  const handleSelectOperation = (x) => {
    if (prevValue) {
      const val = calculate();
      dispatch(setCurrentValue(`${val}`));
      dispatch(setPrevValue(`${val}`));
    } else {
      dispatch(setPrevValue(currentValue));
    }
    dispatch(setOperation(x));
    dispatch(setOverwrite(true));
  };
  const setDigit = (digit) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;
    if (overwrite && digit !== ".") {
      dispatch(setCurrentValue(digit));
    } else {
      dispatch(setCurrentValue(`${currentValue}${digit}`));
    }
    dispatch(setOverwrite(false));
  };
  return (
       <>
      <CssBaseline />
      <Container maxWidth="xl" sx={main} >
        <CalculatorBase elevation={3} sx={calcStyle}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <OutputContainer data-testid="output">
                <OperationText>
                  {prevValue} {operation}
                </OperationText>{" "}
                {currentValue}
              </OutputContainer>
            </Grid>
            <Grid item container columnSpacing={1}>
             <OperationBtn operation={"AC"} selectOperation={() => dispatch(clear())} />
              <OperationBtn operation={"C"} selectOperation={() => dispatch(del())} />
               <OperationBtn operation={"%"} selectOperation={() => dispatch(percent())} />
              <OperationBtn
                operation={"÷"}
                selectOperation={handleSelectOperation}
              />
            </Grid>
            <GridSystem digits={["7","8","9"]} enterDigit={setDigit} operation="*" selectOperation={handleSelectOperation} />
            <GridSystem digits={["4","5","6"]} enterDigit={setDigit} operation="-" selectOperation={handleSelectOperation} />
            <GridSystem digits={["1","2","3"]} enterDigit={setDigit} operation="+" selectOperation={handleSelectOperation} />
            <Grid item container columnSpacing={1}>
              <DigitButton xs={6} digit={"0"} enterDigit={setDigit} />
              <DigitButton digit={"."} enterDigit={setDigit} />
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={()=>dispatch(equals())}
                  sx={{ backgroundColor: "#000", width: "100%" }}>
                  =
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CalculatorBase>
      </Container>
   </>
  );
}
export default App;
