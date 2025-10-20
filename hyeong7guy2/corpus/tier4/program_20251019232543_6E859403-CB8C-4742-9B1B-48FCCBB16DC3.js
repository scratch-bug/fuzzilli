for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    async function f14(a15, a16) {
        for (let i19 = 0, i20 = 10; i20; i20--) {
        }
        for (let v26 = 0; v26 < 5; v26++) {
            const v27 = Symbol.asyncDispose;
            v27.description;
            const v30 = {
                [v27]() {
                    return a15;
                },
            };
            await using v31 = v30;
        }
    }
    f14(a13, Symbol);
    %OptimizeFunctionOnNextCall(f14);
}
new F10();
new F10(Symbol, Symbol);
