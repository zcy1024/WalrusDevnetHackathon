# WalrusDevnetHackathon
Walrus Devnet Hackathon

# Things to note

Please set the wallet you want to use to the testnet in advance.

This is a small achievement of personal learning and development，which is still many imperfections in it, please forgive me.

If you find someone maliciously brushing the rankings, you can use `sui client call --package $PACKAGE --module rank_list --function clearRankList --args $RANKLIST` to reset the rankings.(`$PACKAGE, $RANKLIST` can be obtained at the end of the article.)

# How to play

## online

Thanks to the [`Walrus`](https://suiscan.xyz/testnet/tx/7SALAZecn1H85tWGyEhaW9WgWAQKjzZ5VgurawyLDTqe), we can play it on the website: https://4fnq4oi6tusfdm7auq7sr06du7zbbh4n0us1sjq5ysmrbvjsvq.walrus.site/ or https://zcy1024-walrusdevnethackathon.walrus.site/

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

# Sui Move testnet version 4

```bash
╭─────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                          │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                        │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x2cff394af947bdf150883598ee463742a31cd7ef30645aa050da834b996605b4                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::package::Publisher                                                                  │
│  │ Version: 146099965                                                                                   │
│  │ Digest: 6Aw1diEGUaF1FMphXBnCjZXTZaZhs4arKbsh6R18s1yy                                                 │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x8b542d1f1860f32185c1bea6abed180ee83a6bb852e5a50f04914cc8c88608d6                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Shared( 146099965 )                                                                           │
│  │ ObjectType: 0xf8a68bda0000f7f5d4542d98e180fb6b6b9878817b18e184ab1c81723298883f::admin::Income        │
│  │ Version: 146099965                                                                                   │
│  │ Digest: AgYYgW9xPnP3Hk6ZDkwgrBa92U3KK7ptjN9MvNoXB5xB                                                 │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x9a3e788c124902cea65b0183f30ec29fe98471c36fb67787f639d3807f2d01a2                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::package::UpgradeCap                                                                 │
│  │ Version: 146099965                                                                                   │
│  │ Digest: LGxAmS5F9T4zADvgz7DMUxCd7YuEpcCU6srdE6SuazL                                                  │
│  └──                                                                                                    │
│  ┌──                                                                                                    │
│  │ ObjectID: 0xe19b7655ed7bc03708d8c8bafc369447f1b969656a078e45a57afa1a847579b6                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Shared( 146099965 )                                                                           │
│  │ ObjectType: 0xf8a68bda0000f7f5d4542d98e180fb6b6b9878817b18e184ab1c81723298883f::rank_list::RankList  │
│  │ Version: 146099965                                                                                   │
│  │ Digest: VGvFgQv9pqmDzm8p4WPvFzdtMGAZrD3oYo8FV4etKn7                                                  │
│  └──                                                                                                    │
│ Mutated Objects:                                                                                        │
│  ┌──                                                                                                    │
│  │ ObjectID: 0x01676de212960b0689245914312ac6be3b4d5cffa0cae91ef527441b894f746a                         │
│  │ Sender: 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67                           │
│  │ Owner: Account Address ( 0x9e4092b6a894e6b168aa1c6c009f5c1c1fcb83fb95e5aa39144e1d2be4ee0d67 )        │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                           │
│  │ Version: 146099965                                                                                   │
│  │ Digest: EHXHD7t8iC6HDk1WAaJaMB28DDynBvCfhf1CEKyqmB2b                                                 │
│  └──                                                                                                    │
│ Published Objects:                                                                                      │
│  ┌──                                                                                                    │
│  │ PackageID: 0xf8a68bda0000f7f5d4542d98e180fb6b6b9878817b18e184ab1c81723298883f                        │
│  │ Version: 1                                                                                           │
│  │ Digest: 66jSKtVSXDUSNJ65UJ8UDFLKomHwExyWy2V6QqLEzAzC                                                 │
│  │ Modules: admin, nft, rainbow, rank_list                                                              │
│  └──                                                                                                    │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```
