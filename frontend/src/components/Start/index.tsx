import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Checkbox from '@mui/material/Checkbox'

import "./index.css"

export default function Start() {
    return (
        <div className="start">
            <Button endIcon={<SendIcon />}>Start Game</Button>
            <br />
            <Checkbox size='small'></Checkbox>
            Pay to turn on Rainbow Mode
        </div>
    )
}