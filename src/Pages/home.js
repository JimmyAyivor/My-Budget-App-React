import React from "react";
import { Typography } from "@mui/material";

const home = () => {
  return (
    <Typography variant='h4' justifyContent='center'>
      {" "}
      Welcome to My Budgeting App{" "}
    </Typography>
<Typography variant='p'>A Budgeting App to create, update, and delete budget transactions such as income, taxes, expenses and savings etc…</Typography>
<Typography variant='p'>Built with HTML, CSS, JavaScript,Node.js, React, Express, Material UI with  backend deployed on Heroku and frontend on Netlify.</Typography>
  );
};

export default home;
