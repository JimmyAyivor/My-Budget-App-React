import React from "react";
import TransactionEditForm from "../Components/TransactionEditForm";
import { Typography } from "@mui/material";

const editTrransaction = () => {
  return (
    <div>
      <Typography
        mt={2}
        sx={{ flex: "1 1 100%" }}
        variant='h6'
        id='tableTitle'
        component='div'
      >
        Edit Transaction
      </Typography>

      <TransactionEditForm />
    </div>
  );
};

export default editTrransaction;
