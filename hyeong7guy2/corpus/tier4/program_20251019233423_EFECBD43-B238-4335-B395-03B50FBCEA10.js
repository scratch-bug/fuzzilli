for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    async function f13(a14, a15) {
        for (let i18 = 0, i19 = 10; i19; i19--) {
        }
        for (let v25 = 0; v25 < 5; v25++) {
            const v27 = Symbol.asyncDispose;
            v27.description;
            const v30 = {
                [v27]() {
                },
            };
            await using v31 = v30;
        }
        return a15;
    }
    f13(f13, this);
    %OptimizeFunctionOnNextCall(f13);
}
const v33 = new F9(F9, F9);
new F9(F9, v33);
