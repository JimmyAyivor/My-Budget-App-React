import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UpdateIcon from "@mui/icons-material/Update";
import axios from "axios";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";

const API = process.env.REACT_APP_API_URL;
const TransactionEditForm = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  // const [categories, setCategories] = useState([]);
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);


  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value ,[event.target.name]: event.target.value});
  };

  const getCategories = () => {
    axios
      .get(`${API}/categories`)
      .then((res) => setCategories(res.data))
      .catch((error) => console.transaction(error));
  };

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => console.transaction(error));
  }, [index]);

  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.transaction(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
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
            type='date'
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
          <InputLabel id='category'>Category</InputLabel>

          <Select
            name="category"
            id="category"
            value={transaction.category}
            fullWidth
            labelId="category"
            label="Category"
            onChange={handleTextChange}
          >


            {categories.map(({ id, categoryName }) => (
              <MenuItem key={id} value={categoryName}>{categoryName}</MenuItem>
            ))}

          </Select>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Link to={`/transactions`}>
            <Button variant='outlined' startIcon={<ArrowBackIcon />} fullWidth>
              Back
            </Button>
          </Link>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Button
            variant='contained'
            type='submit'
            color='success'
            endIcon={<UpdateIcon />}
            fullWidth
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TransactionEditForm;
