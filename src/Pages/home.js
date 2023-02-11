import React from "react";
import { Typography } from "@mui/material";

const home = () => {
  return (<>
    <Typography variant='h4' justifyContent='center'>
      {" "}
      Welcome to My Budgeting App{" "}
    </Typography>

<p>A Budgeting App to create, update, and delete budget transactions such as income, taxes, expenses and savings etc…</p>

<p>Built with HTML, CSS, JavaScript,Node.js, React, Express, Material UI with  backend deployed on Fly.io and frontend on Netlify.</p>
</>
  );
};

export default home;
