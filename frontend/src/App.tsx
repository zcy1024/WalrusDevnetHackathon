import { useState } from 'react'
import { useCurrentAccount } from '@mysten/dapp-kit'

import './App.css'

import Connect from './components/Connect'
import Start from './components/Start'
import Game from './components/Game'

function App() {
    const account = useCurrentAccount()

    // check if start play game
    const [play, setPlay] = useState<boolean>(false)

    // check if payed for rainbow
    const [rainbow, setRainbow] = useState<boolean>(false)

    return (
        <>
            <Connect connected={account !== null}/>
            { account && !play && <Start setPlay={setPlay} setRainbow={setRainbow} /> }
            { play && <Game rainbow={rainbow} /> }
        </>
    )
}

export default App
