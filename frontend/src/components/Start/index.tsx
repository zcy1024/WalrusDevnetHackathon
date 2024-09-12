import { useState } from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Checkbox from '@mui/material/Checkbox'

import "./index.css"

import { Transaction } from '@mysten/sui/transactions'
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit'
import { NeedBalance, PackageID, Income, NetWork } from '../ids'

export default function Start({ setPlay }: {setPlay: React.Dispatch<React.SetStateAction<boolean>>}) {
    // Checkbox
    const [checked, setChecked] = useState<boolean>(false)

    const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction()
    const [paying, setPaying] = useState<boolean>(false)

    // change Checkbox
    const handleChange = () => {
        if (paying || checked)
            return

        setPaying(true)

        const txb = new Transaction()
        const [coin] = txb.splitCoins(txb.gas, [NeedBalance])
        txb.moveCall({
            target: `${PackageID}::rainbow::pay_to_rainbow`,
            arguments: [
                txb.object(Income),
                coin
            ]
        })
        signAndExecuteTransaction({
            // Transaction => string | Transaction???
            transaction: txb as any,
            chain: `sui:${NetWork}`
        }, {
            onSuccess: () => setChecked(true),
            onError: () => setPaying(false)
        })
    }

    return (
        <div className="start">
            <Button endIcon={<SendIcon />} onClick={() => (!paying || checked) && setPlay(true)} >Start Game</Button>
            <br />
            <Checkbox size='small' checked={checked} onChange={handleChange}></Checkbox>
            Pay to turn on Rainbow Mode
        </div>
    )
}