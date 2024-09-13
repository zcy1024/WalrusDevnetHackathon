# WalrusDevnetHackathon
Walrus Devnet Hackathon

# Things to note

Please set the wallet you want to use to the testnet in advance.

This is a small achievement of personal learning and development，which is still many imperfections in it, please forgive me.

If you find someone maliciously brushing the rankings, you can use `sui client call --package $PACKAGE --module rank_list --function clearRankList --args $RANKLIST` to reset the rankings.(`$PACKAGE, $RANKLIST` can be obtained at the end of the article.)

# How to play

## online

Thanks to the [`Walrus`](https://suiscan.xyz/testnet/tx/BPmQftEAE5PtEhyFXUzXE3FkLkvp23X8MryQpg5CWbEv), we can play it on the website: https://5itqp1wxjlzj97eiqd9kjiz29dy9d6nwoay0sh1w7vrhb3b4gq.walrus.site/ or https://zcy1024-walrusdevnethackathon.walrus.site/

More infomation for the `Walrus`, please click [this](https://docs.walrus.site/index.html) to learn.

If you have trouble publishing `Walrus`, you can try using the [website](https://59m3rsq2r237hak3yzhy3ga1df9t04y17c2ppbpp69uiqtc7pa.walrus.site/) submission method.(Special thanks to the group for providing this method)

## local

Of course, you can also run this project locally. (If subsequent `Walrus` version updates or `SuiNS` expires and the above URL becomes unavailable, please also read below)<br>
But please note that no matter which way, if you want to have a better experience, you need to have `Sui Wallet`.

```bash
cd ran_dir_shoot_game
pnpm install
pnpm run dev
```

In the worst case, the reset of `Sui testnet` makes the published `Sui Object` invalid, so please publish it yourself and update the relevant information in `frontend/src/components/ids.ts` before use.<br>
At the same time, the static resources (pictures) of the NFT collection are obtained from `Walrus`. If it becomes invalid, please enter `ran_dir_shoot_game/sources/nft.move` to change the related content.

# Game rules

## normal mode

`W/A/S/D` or `Arrow keys` to move.

Fire bullets randomly.

Points are scored based on the initial radius of enemies destroyed.

After 100 bullets, the score will be settled.

If your score can be on the list (top ten), you can choose to pay a certain amount to update the list and get a unique [NFT](https://suiscan.xyz/testnet/object/0x5a8a4e74d85d32eb794eb2bdab34f12f77852204eea82885270e7fce81829117/txs) collection at the same time.

## rainbow mode

Your bullets will be of random colors, and bullets of different colors have different effects.

When you give a fatal blow, your score may increase significantly.

It is worth noting that you need to pay a certain amount in advance to enable rainbow mode.

# Sui Move testnet version 5

```bash
╭─────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                          │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                        │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x14c592054f5ee4b8c918abaa3a0fde131d60db3c96cdc8936c441d72c961d64f                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Shared( 146332938 )                                                                           │
│  │ ObjectType: 0x376bb2eac064012f4bc69e5a083693a3f1edfef2287e21f5480b14b9727e432a::rank_list::RankList  │
│  │ Version: 146332938                                                                                   │
│  │ Digest: uXm8w5efhT8gNM4KpDdJcMw6RFJJnxL6KZeYU7BURmk                                                  │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x9facd448c318704e052f8f54dcc948694cc1921803106bb1e2961b58cbb2cac7                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::package::UpgradeCap                                                                 │
│  │ Version: 146332938                                                                                   │
│  │ Digest: EN8iVUowg1aKcThxMop3vqLTn12gzdy3zzRszXGiQgYp                                                 │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0xa8cc284f2e110bed4f19ca63752c5ba5f097fc929ea17b3241ea0a6964ddf5bd                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::package::Publisher                                                                  │
│  │ Version: 146332938                                                                                   │
│  │ Digest: DdyG6nCjGqv7ugNz4Y1kDWiMsqmKEYnuu4twXEAiAuM2                                                 │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0xc554f6f828091cc0ce50ac49061c502b4a258a95865cdf668abe563b5766d37b                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Shared( 146332938 )                                                                           │
│  │ ObjectType: 0x376bb2eac064012f4bc69e5a083693a3f1edfef2287e21f5480b14b9727e432a::admin::Income        │
│  │ Version: 146332938                                                                                   │
│  │ Digest: FmjYBM2aY9627BfU1NKAYxWoAbsCJTfw4YJxC4BjnEW7                                                 │
│  └──                                                                                                    │
│ Mutated Objects:                                                                                        │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x01676de212960b0689245914312ac6be3b4d5cffa0cae91ef527441b894f746a                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                           │
│  │ Version: 146332938                                                                                   │
│  │ Digest: 7akSiHtoMnT59PmdeBQrTzeuP5ts3chCJuBdeXqP3vr9                                                 │
│  └──                                                                                                    │
│ Published Objects:                                                                                      │
│  ┌──                                                                                                    │
│  │ PackageID: 0x376bb2eac064012f4bc69e5a083693a3f1edfef2287e21f5480b14b9727e432a                        │
│  │ Version: 1                                                                                           │
│  │ Digest: 8grL6fNZKcCf5gFcnrQntdS9NN39kTAjJeh9Qfv4JJFv                                                 │
│  │ Modules: admin, nft, rainbow, rank_list                                                              │
│  └──                                                                                                    │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```
