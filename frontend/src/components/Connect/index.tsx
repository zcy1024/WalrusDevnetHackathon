import { ConnectButton } from '@mysten/dapp-kit'

import "./index.css"

export default function Connect({ connected }: {connected: boolean}) {
    return (
        <div className={"connect " + (connected ? "auto-height" : "full-height")}>
            <div className={connected ? "right" : "center"}>
                <ConnectButton />
            </div>
        </div>
    )
}