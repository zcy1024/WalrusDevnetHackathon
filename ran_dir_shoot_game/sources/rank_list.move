module ran_dir_shoot_game::rank_list {
    use sui::coin::Coin;
    use sui::sui::SUI;

    use ran_dir_shoot_game::admin::Income;
    use ran_dir_shoot_game::nft::mint;

    // ====== constant ======

    const NeedBalance: u64 = 666666;

    // ====== error code ======

    const ENotEnoughSUI: u64 = 1;
    const ENotEnoughScore: u64 = 2;

    // ====== struct ======

    public struct RankList has key, store {
        id: UID,
        rank: vector<u64>
    }

    // ====== function ======

    fun init(ctx: &mut TxContext) {
        transfer::share_object(RankList {
            id: object::new(ctx),
            rank: vector<u64>[]
        });
    }

    fun getRankIndex(rank_list: &RankList, score: u64): u64 {
        let mut i: u64 = 0;
        let mut index: u64 = 111;
        while (i < rank_list.rank.length()) {
            if (score > rank_list.rank[i]) {
                index = i;
                break
            };
            i = i + 1;
        };

        index
    }

    entry fun updateRankList(rank_list: &mut RankList, score: u64, pay: Coin<SUI>, income: &mut Income, ctx: &mut TxContext) {
        // check sui
        assert!(pay.value() >= NeedBalance, ENotEnoughSUI);

        // get rank index and check it
        let rankIndex: u64 = getRankIndex(rank_list, score);
        assert!(rankIndex != 111 || rank_list.rank.length() < 10, ENotEnoughScore);
        // update rank list
        if (rankIndex == 111) {
            rank_list.rank.push_back(score);
        } else {
            rank_list.rank.insert(score, rankIndex);
            rank_list.rank.pop_back();
        };

        // income store
        income.join(pay, ctx);

        // mint the nft
        mint(ctx.sender(), ctx);
    }

    // Because of the problem of circular references,
    // the function to clean up the rankings is not only open to the publisher.
    // A solution may be found in the future.
    // Perhaps administrative access and revenue storage could be further split?
    entry fun clearRankList(rank_list: &mut RankList) {
        while (rank_list.rank.length() > 0) {
            rank_list.rank.pop_back();
        };
    }
}