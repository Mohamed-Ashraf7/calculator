import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import CustomizedSwitches from "../theme/ThemeBtn";
import img1 from "../img/cal.png";
import PinIcon from "@mui/icons-material/Pin";
import backimg from "../img/back1.jpg";

function ResponsiveAppBar() {
  return (
    <Container
      maxWidth="lg"
      position="static"
      sx={{
        backgroundImage: `url(${backimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",

        boxShadow: "8px 8px 4px #000",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Calculater <PinIcon sx={{ width: 40, height: 40 }} />
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Tooltip title="User Profile">
              <IconButton>
                <Avatar
                  alt="Profile"
                  src={img1}
                  sx={{
                    width: 80,
                    height: 60,
                    border: "4px solid #ddd",
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={6}
          md={4}
          sx={{
            pt: 2,
            textAlign: "center",
          }}
        >
          <CustomizedSwitches />
        </Grid>
      </Grid>
    </Container>
  );
}
export default ResponsiveAppBar;
