import React from "react";
import TransactionNewForm from "../Components/TransactionNewForm";
import { Typography } from "@mui/material";

const newTransaction = () => {
  return (
    <>
      <Typography mt={2} variant='h6' id='tableTitle'>
        Add New Transaction
      </Typography>
      <TransactionNewForm />
    </>
  );
};

export default newTransaction;
