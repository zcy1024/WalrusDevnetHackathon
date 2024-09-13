# WalrusDevnetHackathon
Walrus Devnet Hackathon

# Things to note

Please set the wallet you want to use to the testnet in advance.

This is a small achievement of personal learning and development，which is still many imperfections in it, please forgive me.

If you find someone maliciously brushing the rankings, you can use `sui client call --package $PACKAGE --module rank_list --function clearRankList --args $RANKLIST` to reset the rankings.(`$PACKAGE, $RANKLIST` can be obtained at the end of the article.)

# How to play

## online

Thanks to the [`Walrus`](https://suiscan.xyz/testnet/tx/3ZqMirvxVQJbHjd1JhnsuiQzDXpJb8T3wbR5ZVZT6Z3y), we can play it on the website: https://3bkzzodr9nbikqurtommif4gk34v0wr1d101bs6ri9fvx68kw.walrus.site/ or https://zcy1024-walrusdevnethackathon.walrus.site/

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

In the worst case, the reset of `Sui testnet` makes the published `Sui Object` invalid, so please publish it yourself and update the relevant information in `frontend/src/components/ids.ts` before use.

# Game rules

## normal mode

`W/A/S/D` or `Arrow keys` to move.

Fire bullets randomly.

Points are scored based on the initial radius of enemies destroyed.

After 100 bullets, the score will be settled.

If your score can be on the list (top ten), you can choose to pay a certain amount to update the list and get a unique NFT collection at the same time.

## rainbow mode

Your bullets will be of random colors, and bullets of different colors have different effects.

When you give a fatal blow, your score may increase significantly.

It is worth noting that you need to pay a certain amount in advance to enable rainbow mode.

# Sui Move testnet version 3

```bash
╭─────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                          │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                        │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x15c4e20ec78a3d9f1793ebcbb65f47a1eec1e364399d93b1873040e00a6528b0                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Shared( 48027448 )                                                                            │
│  │ ObjectType: 0x5cb99ccf8189a064f18382eb255e0ed80657dec3759707f60238bf32e3a6aa91::admin::Income        │
│  │ Version: 48027448                                                                                    │
│  │ Digest: DZPRpT9nX2Hh746dghsv8PXVZG5AMV76WQDpbmQ4B7EQ                                                 │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x1d0e5cf63449c8379aee3e5ed2320b373128971465b7a7585c9f6ee2c0418123                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::package::UpgradeCap                                                                 │
│  │ Version: 48027448                                                                                    │
│  │ Digest: HWjnW8gmxrKxG6cT9jcXnQ4Xdsby8VmrDbN7WrRSb1nQ                                                 │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x6755eb0ea22fc9a56b77b3eccb60a0273ab58fb5d984b7fed16a607fdb51832e                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::package::Publisher                                                                  │
│  │ Version: 48027448                                                                                    │
│  │ Digest: 23tpxQxmPqASL86ZWnEW2kwYpSjAbnvEry4QdKcbVgWQ                                                 │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x8041e0b5e8b24a189cd366b2e855c93a6f15dbdd8755068097fa2ca81e4381ab                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Shared( 48027448 )                                                                            │
│  │ ObjectType: 0x5cb99ccf8189a064f18382eb255e0ed80657dec3759707f60238bf32e3a6aa91::rank_list::RankList  │
│  │ Version: 48027448                                                                                    │
│  │ Digest: FpGP39AWontEyA1hErnWTomktqBwMRnkkiZkN9omVSCZ                                                 │
│  └──                                                                                                    │
│ Mutated Objects:                                                                                        │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x01676de212960b0689245914312ac6be3b4d5cffa0cae91ef527441b894f746a                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                           │
│  │ Version: 48027448                                                                                    │
│  │ Digest: 8L3t1K4XfUSq4EECAHnC9vs7hdMSZyy7KcGTFkGpcSJH                                                 │
│  └──                                                                                                    │
│ Published Objects:                                                                                      │
│  ┌──                                                                                                    │
│  │ PackageID: 0x5cb99ccf8189a064f18382eb255e0ed80657dec3759707f60238bf32e3a6aa91                        │
│  │ Version: 1                                                                                           │
│  │ Digest: 3PdfE19EvJDxzkCuHCPd6QniRQwQNmjiFrRny2Q7p49q                                                 │
│  │ Modules: admin, nft, rainbow, rank_list                                                              │
│  └──                                                                                                    │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```
