import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





export default class BookingTable extends React.Component {
//   const classes = useStyles();

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      rows:[]
    };
  }

  createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
  }

  render () {
    rows = this.state.rows;
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Booking Table">
            <TableHead>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Room</TableCell>
                <TableCell align="right">From</TableCell>
                <TableCell align="right">To</TableCell>
                <TableCell align="right">Adults</TableCell>
                <TableCell align="right">Children</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
            rows.length > 0 (
            rows.map((row) => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
            ))
             )
            }
            </TableBody>
        </Table>
        </TableContainer>
    );
    }

}
