import React from "react";
// import CartWidget from "./CartWidget";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import omoriAll from "../../images/header.jpg";

const pages = ["Products", "Pricing", "Blog"];

function NavBar(props) {
  return (
    <AppBar position="static" color={props.color}>
      <img src={omoriAll} alt="" />
      <Toolbar>
        <IconButton sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant="h4">Omori</Typography>
        <Menu
          id="source-menu"
          PaperProps={{
            sx: {
              overflow: "visible",
            },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page}>
              <Typography>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          {pages.map((page) => (
            <Button key={page}>
              <Typography variant="h6"> {page}</Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
