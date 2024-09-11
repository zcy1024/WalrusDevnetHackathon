module ran_dir_shoot_game::nft {
    use std::string::{Self, String};
    use sui::url::{Self, Url};

    // ====== struct ======

    public struct NFT has key, store {
        id: UID,
        name: String,
        description: String,
        url: Url
    }

    // ====== function ======

    public fun mint(owner: address, ctx: &mut TxContext) {
        transfer::public_transfer(NFT {
            id: object::new(ctx),
            name: string::utf8(b"HuangFengDaSheng"),
            description: string::utf8(b"The final boss of the second chapter of Black Myth Wukong has won praise from the majority of netizens for its rich character creation. This is hereby awarded to reward players who have made the list!"),
            url: url::new_unsafe_from_bytes(b"https://github.com/zcy1024/WalrusDevnetHackathon/blob/main/ran_dir_shoot_game/imgs/HuangFengDaSheng.png?raw=true")
        }, owner);
    }
}