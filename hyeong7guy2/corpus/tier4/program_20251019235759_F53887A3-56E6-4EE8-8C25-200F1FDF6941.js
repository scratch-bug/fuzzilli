for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    async function f14(a15, a16) {
        for (let i19 = 0, i20 = 10; i20; i20--) {
        }
        for (let v26 = 0; v26 < 5; v26++) {
            const v27 = Symbol.asyncDispose;
            const v29 = {
                [v27]() {
                },
            };
            v29.f ^= v26;
            await using v30 = v29;
        }
        return F10;
    }
    f14(a12, f14);
    %OptimizeFunctionOnNextCall(f14);
}
const v32 = new F10();
new F10(v32, Symbol);
