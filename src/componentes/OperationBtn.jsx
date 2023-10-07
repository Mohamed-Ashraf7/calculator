import { Fab as MuiButton, Grid, styled } from "@mui/material";

const Button = styled(MuiButton)((props) => ({
  border: "1px solid #007477",
  borderRadius: "8px",
  width: "100%",
  fontWeight: "bolder",
  fontSize: "1.1rem",
}));
const OperationBtn = ({ operation, selectOperation }) => {
  return (
    <Grid item xs={3}>
      <Button variant="extended" onClick={() => selectOperation(operation)}>
        {operation}
      </Button>
    </Grid>
  );
};
export default OperationBtn;
