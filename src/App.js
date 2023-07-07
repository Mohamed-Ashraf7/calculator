import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  styled,
} from "@mui/material";
import { calculate } from "./store/Toolkit";
import {
  setPrevValue,
  setCurrentValue,
  setOperation,
  setOverwrite,
  clear,
  del,
  percent,
  equals,
} from "./store/Toolkit";
import DigitButton from "./componentes/DigitButton";
import OperationBtn from "./componentes/OperationBtn";
import Header from "./componentes/Header.jsx";
import { useTheme } from "./theme/ThemeProvider";
import backimg from "./img/back1.jpg";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const OutputContainer = styled(`div`)(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  color: "black",
  borderRadius: "4px",
  marginBottom: "4px",
  height: "2.9em",
  padding: theme.spacing(1),
  fontSize: "3em",
  overflow: "hidden",
  backgroundColor: "#f2f2f2",
}));
const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  margin: theme.spacing(4),
}));
const OperationText = styled(`div`)({
  position: "relative",
  top: -5,
  left: 0,
  padding: "4px",
  fontSize: ".35em",

  backgroundColor: "#dddd",
  borderRadius: "4px",
});

function App() {
  const dispatch = useDispatch();
  const { prevValue, currentValue, operation, overwrite } = useSelector(
    (state) => state.calculator
  );
  const handleEquals = () => {
    dispatch(equals());
  };
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

  const handleClear = () => {
    dispatch(clear());
  };

  const handleDel = () => {
    dispatch(del());
  };

  const handlePercent = () => {
    dispatch(percent());
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

  const { theme } = useTheme();
  const appliedTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: "#006064",
      },
    },
  });

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          mt: 2,
          backgroundImage: `url(${backimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          boxShadow: "8px 8px 4px #222",
          p: 1,
          borderRadius: "4px",
        }}
      >
        <CalculatorBase
          elevation={3}
          sx={{
            width: { xs: "100%", md: "42%" },
            marginX: "auto",
            boxShadow: "8px 8px 2px #000",
            borderRadius: "7%",
            p: 7,
          }}
        >
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
              <OperationBtn
                operation={"AC"}
                selectOperation={handleClear}
                selectedOperation={operation}
              />
              <OperationBtn
                operation={"C"}
                selectOperation={handleDel}
                selectedOperation={operation}
              />
              <OperationBtn
                operation={"%"}
                selectOperation={handlePercent}
                selectedOperation={operation}
              />
              <OperationBtn
                operation={"÷"}
                selectOperation={handleSelectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <DigitButton digit={"7"} enterDigit={setDigit} />
              <DigitButton digit={"8"} enterDigit={setDigit} />
              <DigitButton digit={"9"} enterDigit={setDigit} />
              <OperationBtn
                operation={"*"}
                selectOperation={handleSelectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <DigitButton digit={"4"} enterDigit={setDigit} />
              <DigitButton digit={"5"} enterDigit={setDigit} />
              <DigitButton digit={"6"} enterDigit={setDigit} />
              <OperationBtn
                operation={"-"}
                selectOperation={handleSelectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <DigitButton digit={"1"} enterDigit={setDigit} />
              <DigitButton digit={"2"} enterDigit={setDigit} />
              <DigitButton digit={"3"} enterDigit={setDigit} />

              <OperationBtn
                operation={"+"}
                selectOperation={handleSelectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <DigitButton xs={6} digit={"0"} enterDigit={setDigit} />
              <DigitButton digit={"."} enterDigit={setDigit} />

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={handleEquals}
                  sx={{ backgroundColor: "#000", width: "100%" }}
                >
                  =
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CalculatorBase>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
