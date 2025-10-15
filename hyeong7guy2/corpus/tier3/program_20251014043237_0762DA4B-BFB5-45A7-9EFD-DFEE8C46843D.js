const v0 = /[x]/imsd;
async function f2(a3, a4) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let v7 = 0; v7 < 100; v7++) {
        const v9 = v7 % 2;
        const v10 = v9 | v9;
        try { v10(f2, v7, Symbol, a3, v10); } catch (e) {}
        const v13 = {
            [v0]() {
            },
        };
        new F5();
    }
    const v15 = Symbol.asyncDispose;
    const v17 = {
        [v15]() {
        },
    };
    await using v18 = v17;
    return v0;
}
f2();
