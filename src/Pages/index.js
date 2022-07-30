import React from "react";
import Transactions from "../Components/Transactions";
import { Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <Typography
        mt={2}
        sx={{ flex: "1 1 100%" }}
        variant='h6'
        id='tableTitle'
        component='div'
      >
        All Transactions
      </Typography>

      <Transactions />
    </>
  );
};

export default index;
