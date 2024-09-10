import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import "./index.css"
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    id: string,
    address: string,
    score: string
) {
    return { id, address, score };
}

const rows = [
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-'),
    createData(new Date().getTime().toString() + 'Address' + Math.random().toString(), '------------------------------------------------------------------', '-')
];

export default function Settlement() {
    const [register, setRegister] = useState<boolean>(true)
    const [check, setCheck] = useState<boolean>(false)

    const handlerClick = () => {
        setCheck(true)
    }

    return (
        <div className="settlement">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sui Address(Top Ten)</StyledTableCell>
                            <StyledTableCell align="right">Score</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.address}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.score}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            { register && <Button color='success' onClick={handlerClick}>List registration</Button> }
            <Alert severity="success" sx={{visibility: `${check ? "visible" : "hidden"}`}}>
                <AlertTitle align='left'>Success</AlertTitle>
                The list registration is successful and you will receive a digital collection!
            </Alert>
        </div>
    )
}