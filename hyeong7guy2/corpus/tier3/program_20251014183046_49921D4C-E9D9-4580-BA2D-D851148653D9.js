function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = {};
        async function f9() {
            v8 >> 9;
        }
        return f9();
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v14 = new F0(F0, F0);
new F0(F0, v14);
new F0(F0, F0);
