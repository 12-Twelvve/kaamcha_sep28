import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        twelvve.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 3,
          mt: "auto",
          backgroundColor: "#00e5ff",
          textAlign:"center"
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            This site belongs to godmode-clan
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
