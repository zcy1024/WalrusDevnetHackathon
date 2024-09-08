import { useState } from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Checkbox from '@mui/material/Checkbox'

import "./index.css"

export default function Start({ setPlay }: {setPlay: React.Dispatch<React.SetStateAction<boolean>>}) {
    // Checkbox
    const [checked, setChecked] = useState<boolean>(false)

    // change Checkbox
    const handleChange = () => {
        if (checked)
            return
        // TODO: pay Sui
        // if success then setChecked(true)
        setChecked(true)
    }

    return (
        <div className="start">
            <Button endIcon={<SendIcon />} onClick={() => setPlay(true)} >Start Game</Button>
            <br />
            <Checkbox size='small' checked={checked} onChange={handleChange}></Checkbox>
            Pay to turn on Rainbow Mode
        </div>
    )
}