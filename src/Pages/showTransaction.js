import React from "react";
import TransactionDetail from "../Components/TransactionDetail";
import { Typography } from "@mui/material";

const showTransaction = () => {
  return (
    <>
       <Typography
        mt={2}
        variant='h6'
        id='tableTitle'
      >
        Transaction Detail
      </Typography>
        <TransactionDetail />
    </>
  );
};

export default showTransaction;
