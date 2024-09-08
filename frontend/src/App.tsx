import { useCurrentAccount } from '@mysten/dapp-kit'

import './App.css'

import Connect from './components/Connect'
import Start from './components/Start'

function App() {
    const account = useCurrentAccount()

    return (
        <>
            <Connect connected={account !== null}/>
            { account && <Start /> }
        </>
    )
}

export default App
