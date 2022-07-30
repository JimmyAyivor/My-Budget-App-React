import React from "react";
import { Link } from "react-router-dom";
import { Typography, AppBar, Toolbar } from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const navBar = () => {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <AssessmentIcon />
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/transactions' style={{ color: "white" }}>
              Budget App
            </Link>
          </Typography>
          <Link to='/transactions/new'>
            <Button
              variant='button'
              display='block'
              style={{ color: "white" }}
              endIcon={<AddIcon />}
            >
              NEW TRANSACTION
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default navBar;
