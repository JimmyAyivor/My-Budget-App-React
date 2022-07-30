import React from "react";
import TransactionNewForm from "../Components/TransactionNewForm";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

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
