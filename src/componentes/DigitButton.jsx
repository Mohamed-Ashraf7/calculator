import { Button, Grid } from "@mui/material";
const DigitButton = ({ digit, enterDigit }) => {
  return (
    <Grid item xs={3}>
      <Button
        sx={{
          backgroundColor:"#000",
          fontSize: "1rem",
          borderRadius: "7px",
          width: "100%",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
        variant="contained"
        onClick={() => enterDigit(digit)}
      >
        {digit}
      </Button>
    </Grid>
  );
};
export default DigitButton;
