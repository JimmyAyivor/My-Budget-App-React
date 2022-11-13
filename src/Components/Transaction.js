import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const Transaction = ({ transaction, index, row }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.transaction(error));
  };
const transactionTable = ( <TableRow hover role='checkbox' tabIndex={-1} key={index}>
      <TableCell>
        <Link to={`/transactions/${index}/edit`}>
          <Button endIcon={<EditIcon />}></Button>
        </Link>
        <Link to={`/transactions/${index}`}>
          <Button onClick={handleDelete} endIcon={<DeleteIcon />}></Button>
        </Link>
      </TableCell>
      <TableCell>{transaction.date}</TableCell>
      <TableCell>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
      </TableCell>
      <TableCell align='right'>{transaction.amount}</TableCell>
    </TableRow>)
  return (<>{row ? transactionTable : 'No transactions found'}
   
  </>);
};

export default Transaction;
