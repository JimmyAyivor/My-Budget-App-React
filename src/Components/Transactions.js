import { React, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Transaction from "./Transaction";
import axios from "axios";
import { Box, Typography } from "@mui/material";
const API = process.env.REACT_APP_API_URL;

const columns = [
  { id: "actions", label: "Actions", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "from", label: "From", minWidth: 100 },
  { id: "category", label: "Category", minWidth: 100 },

  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  let filteredTransaction = transactions;

  if (searchInput) {

    filteredTransaction = transactions.filter((transaction) => {

      const { date, item_name, from, amount, category } = transaction

      return date.toLowerCase().includes(searchInput.toLowerCase()) ||
        item_name.toLowerCase().includes(searchInput.toLowerCase()) ||
        from.toLowerCase().includes(searchInput.toLowerCase()) ||
        category.toLowerCase().includes(searchInput.toLowerCase()) ||
        amount.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [transactions]);

  const total = transactions.map(({ amount }) => amount * 1).reduce((a, b) => a + b, 0);

  const checkTotal = () => {
    if (total && total < 0) {
      return <span style={{ border: "2px solid red" }}>{total}</span>;
    } else if (total && total > 1000) {
      return <span style={{ border: "2px solid green" }}>{total}</span>;
    }
    return total;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box mt={2} sx={{ width: "100%", overflow: "hidden" }}>
      <div className="TopSearch">
        <input
          value={searchInput}
          type="text"
          placeholder="Search... "
          onChange={handleChange}
        /></div>
      <Typography variant='h6' m={2} align='right' gutterBottom component='div'>
        Bank Account Total: {checkTotal()}
      </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTransaction.length > 0 ? filteredTransaction.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            }) : <tr><td style={{textAlign:"center"}} colSpan='6'>No transaction found!</td></tr>}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={filteredTransaction.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};
export default Transactions;
