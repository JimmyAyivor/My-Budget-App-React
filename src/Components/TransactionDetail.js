import { React, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, Typography } from "@mui/material";

import axios from "axios";
import ArrowBack from "@mui/icons-material/ArrowBack";

const API = process.env.REACT_APP_API_URL;
const TransactionDetail = () => {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => navigate(`/404`));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.transaction(error));
  };

  return (
    <Grid container spacing={1} alignSelf='center'>
      <Grid xs={12} item>
        <Typography align='left' mt={2} variant='subtitle1'>
          <strong> Name:</strong> {transaction.item_name}
        </Typography>
      </Grid>
      <Grid xs={12} item>
        <Typography align='left' variant='subtitle1'>
          <strong>Amount:</strong> {transaction.amount}
        </Typography>
      </Grid>
      <Grid xs={12} item>
        <Typography align='left' variant='subtitle1'>
          <strong> Date:</strong> {transaction.date}
        </Typography>
      </Grid>
      <Grid xs={12} item>
        <Typography align='left' variant='subtitle1'>
          <strong>From:</strong> {transaction.from}
        </Typography>
      </Grid>
      <Grid xs={12} mb={3} item>
        <Typography align='left' variant='subtitle1'>
          <strong>Category:</strong> {transaction.category}
        </Typography>
      </Grid>

      <Grid xs={12} md={4} item>
        <Link to={`/transactions`}>
          <Button variant='outlined' startIcon={<ArrowBack />} fullWidth>
            Back
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} md={4} item>
        <Link to={`/transactions/${index}/edit`}>
          <Button
            variant='contained'
            style={{ backgroundColor: "#f57c00" }}
            endIcon={<EditIcon />}
            fullWidth
          >
            Edit
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} md={4} item>
        <Button
          variant='contained'
          color='error'
          onClick={handleDelete}
          endIcon={<DeleteIcon />}
          fullWidth
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default TransactionDetail;
