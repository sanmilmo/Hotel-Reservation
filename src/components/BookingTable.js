import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux'


export default function BookingTable() {
  const rooms = useSelector(state =>state.rooms)
    return (
        
        <TableContainer component={Paper}>
        <Table aria-label="Booking Table">
            <TableHead>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Room</TableCell>
                <TableCell align="right">Adults</TableCell>
                <TableCell align="right">Children</TableCell>
                <TableCell align="right">From</TableCell>
                <TableCell align="right">To</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
            rooms !== undefined &&
            rooms.length > 0 &&
            rooms.map((row) => (
                <TableRow key={row.number}>
                  <TableCell component="th" scope="row">{row.number}</TableCell>
                  <TableCell align="right">{row.room}</TableCell>
                  <TableCell align="right">{row.adults}</TableCell>
                  <TableCell align="right">{row.children}</TableCell>
                  <TableCell align="right">{row.from}</TableCell>
                  <TableCell align="right">{row.to}</TableCell>
                </TableRow>
            ))
            }
            </TableBody>
        </Table>
        </TableContainer>
    );

}
