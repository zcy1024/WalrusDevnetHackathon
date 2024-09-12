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
import { useEffect, useState } from 'react';

import { Transaction } from "@mysten/sui/transactions";
import { useCurrentAccount, useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { Income, NeedBalance, netWork, PackageID, RankList } from '../../ids';

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
    address: string,
    score: string
) {
    const id = new Date().getTime().toString() + address +  Math.random().toString()
    return { id, address, score };
}

export type RankProps = {
    users: string[],
    scores: string[]
}

export default function Settlement({ score, rank }: { score: number, rank: RankProps }) {
    const [register, setRegister] = useState<boolean>(false)
    const [check, setCheck] = useState<boolean>(false)

    const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction()
    const [transacting, setTransacting] = useState<boolean>(false)

    const handlerClick = () => {
        if (check)
            window.location.reload()

        if (transacting)
            return

        setTransacting(true)

        const txb = new Transaction()
        const [coin] = txb.splitCoins(txb.gas, [NeedBalance])
        txb.moveCall({
            target: `${PackageID}::rank_list::updateRankList`,
            arguments: [
                txb.object(RankList),
                txb.pure.u64(score),
                coin,
                txb.object(Income)
            ]
        })
        signAndExecuteTransaction({
            // Transaction => string | Transaction???
            transaction: txb as any,
            chain: `sui:${netWork}`
        }, {
            onSuccess: () => setCheck(true),
            onError: () => setTransacting(false)
        })
    }

    const [rows, setRows] = useState<{
        id: string,
        address: string,
        score: string
    }[]>([])

    const account = useCurrentAccount()

    useEffect(() => {
        let fake_users = [...rank.users]
        let fake_scores = [...rank.scores]
        while (fake_users.length < 10) {
            fake_users.push('------------------------------------------------------------------')
            fake_scores.push('-')
        }
        if (account) {
            fake_users.push(account.address + "(You)")
            fake_scores.push(score.toString())
        }
        setRows(fake_users.map((fake_user, index) => createData(fake_user, fake_scores[index])))
    }, [rank])

    useEffect(() => {
        setRegister(rank.scores.length < 10 || rank.scores.find(s => Number(s) < score) !== undefined)
    }, [score, rank])

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
            {register && <Button color='success' onClick={handlerClick}>List registration</Button>}
            <Alert severity="success" sx={{ visibility: `${check ? "visible" : "hidden"}` }}>
                <AlertTitle align='left'>Success</AlertTitle>
                The list registration is successful and you will receive a digital collection!
            </Alert>
        </div>
    )
}