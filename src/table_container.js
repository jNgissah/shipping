
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(receiver, contact, name, CBM, Quantity, China, Price) {
  return {receiver, contact,  name, CBM, Quantity, China, Price };
}

const rows = [
  createData('John', '02455555', 'Ice cream sandwich', 237, 9.0, 37, 4.3)
 
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
      
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell>Receiver</StyledTableCell>
            <StyledTableCell>Contact</StyledTableCell>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">CBM</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">China Tracking Number</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">1</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.receiver}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.contact}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.CBM}</StyledTableCell>
              <StyledTableCell align="right">{row.Quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.China}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



