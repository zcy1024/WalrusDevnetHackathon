module ran_dir_shoot_game::rainbow {
    use sui::coin::Coin;
    use sui::sui::SUI;

    use ran_dir_shoot_game::admin::Income;

    // ====== constant ======

    const NeedBalance: u64 = 666666;

    // ====== error code ======

    const ENotEnoughSUI: u64 = 0;

    // ====== function ======

    entry fun pay_to_rainbow(income: &mut Income, pay: Coin<SUI>, ctx: &mut TxContext) {
        // check sui
        assert!(pay.value() >= NeedBalance, ENotEnoughSUI);

        // income store
        income.join(pay, ctx);
    }
}