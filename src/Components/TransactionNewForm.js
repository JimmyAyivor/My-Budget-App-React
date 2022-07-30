import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
const API = process.env.REACT_APP_API_URL;
const TransactionNewForm = () => {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then((res) => navigate(`/transactions`))
      .catch((error) => console.transaction(error));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} item>
          <TextField
            margin='dense'
            required
            id='item_name'
            label='Name'
            type='text'
            value={transaction.item_name}
            placeholder='Name'
            onChange={handleTextChange}
            fullWidth
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            margin='dense'
            required
            id='amount'
            label='Amount'
            type='number'
            placeholder='0'
            value={transaction.amount}
            onChange={handleTextChange}
            fullWidth
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            margin='dense'
            required
            id='date'
            label='Date'
            type='text'
            placeholder='Date'
            value={transaction.date}
            onChange={handleTextChange}
            fullWidth
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            margin='dense'
            required
            id='from'
            label='From'
            type='text'
            placeholder='From'
            value={transaction.from}
            onChange={handleTextChange}
            fullWidth
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            margin='dense'
            label='Category'
            id='category'
            type='text'
            name='category'
            onChange={handleTextChange}
            value={transaction.category}
            fullWidth
          />

          {
            //TODO - Implement Categogy > Select fountionality
            /* {categories.map((category) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select> */
          }
        </Grid>
        <Grid xs={12} item>
          <Button
            margin='dense'
            variant='contained'
            type='submit'
            color='success'
            endIcon={<AddIcon />}
            fullWidth
          >
            CREATE NEW ITEM
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TransactionNewForm;
