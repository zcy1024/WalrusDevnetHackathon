module ran_dir_shoot_game::admin {
    use sui::sui::SUI;
    use sui::balance::{Self, Balance};
    use sui::package::{Self, Publisher};

    use ran_dir_shoot_game::nft::mint;

    // ====== struct ======

    public struct ADMIN has drop {}

    public struct Income has key {
        id: UID,
        income: Balance<SUI>
    }

    // ====== function ======

    fun init(otw: ADMIN, ctx: &mut TxContext) {
        // create and transfer Publisher
        package::claim_and_keep(otw, ctx);

        // create and share Income
        transfer::share_object(Income {
            id: object::new(ctx),
            income: balance::zero()
        });
    }

    entry fun withdraw(_: &Publisher, income: &mut Income, ctx: &mut TxContext) {
        if (income.income.value() == 0)
            return;
        // get all balance
        let all_balance = income.income.withdraw_all();
        // transfer it to publisher
        transfer::public_transfer(all_balance.into_coin(ctx), ctx.sender());
    }

    entry fun gift(_: &Publisher, owner: address, ctx: &mut TxContext) {
        mint(owner, ctx);
    }
}