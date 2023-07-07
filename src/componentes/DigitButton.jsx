import { Button, Grid } from "@mui/material";

const DigitButton = ({ digit, enterDigit }) => {
  return (
    <Grid item xs={3}>
      <Button
        sx={{ fontSize: "1rem", width: "100%" }}
        variant="contained"
        onClick={() => enterDigit(digit)}
      >
        {digit}
      </Button>
    </Grid>
  );
};
export default DigitButton;
