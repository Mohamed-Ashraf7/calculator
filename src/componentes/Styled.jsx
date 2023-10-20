import {
  Paper,
  styled,
} from "@mui/material";
import backimg from "../img/6.jpg";
import backimg2 from "../img/3.jpg";
export const OutputContainer = styled(`div`)(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  color: "black",
  marginTop:"5px",
  borderRadius: "4px",
  marginBottom: "9px",
  height: "2.6em",
  padding: theme.spacing(1),
  fontSize: "2.8em",
  overflow: "hidden",
  backgroundColor: "#f2f2f2",
}));
export const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  margin: theme.spacing(3),
}));
export const OperationText = styled(`div`)({
  position: "relative",
  top: -5,
  left: 0,
  padding: "4px",
  fontSize: ".35em",
  backgroundColor: "#dddd",
  borderRadius: "4px",
});
export const main = {height:"100vh",
  display: "flex",
  justifyItems: "center",
  alignItems:"center",
  backgroundImage: `linear-gradient(180deg,#0001,#000), url(${backimg})`,
  backgroundPosition: "100% 50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  py: 2,
};
export const calcStyle = {
   backgroundImage: `linear-gradient(90deg,#0001,#0009), url(${backimg2})`,
            width: { xs: "100%",md:"50%" , lg: "33%" },
            marginX: "auto",
            borderBottom: "6px solid #455a64",
            boxShadow: "8px 8px 2px #000",
            borderRadius: "6%",
            p: 6,
            py: 9,
}