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
  const {date, item_name, from, amount, category } = transaction
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
      <TableCell>{date}</TableCell>
      <TableCell>
        <Link to={`/transactions/${index}`}>{item_name}</Link>
      </TableCell>
      <TableCell>
        <Link to={`/transactions/${index}`}>{from}</Link>
      </TableCell>
      <TableCell>
        <Link to={`/transactions/${index}`}>{category}</Link>
      </TableCell>
      <TableCell align='right'>{amount}</TableCell>
    </TableRow>)
  
  return (<>
  {transactionTable}
   </>);
};

export default Transaction;
