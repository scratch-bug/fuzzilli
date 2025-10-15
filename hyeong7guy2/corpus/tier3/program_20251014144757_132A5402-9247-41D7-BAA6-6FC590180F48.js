function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        Uint8Array.of(93, 185, 114, 38, 105, 61, 212, 7, 171, 72, 41);
        for (let v21 = 0; v21 < 5; v21++) {
        }
        return 212;
    }
    f4(this, this, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0(F0, F0);
new F0(F0, v23);
new F0(F0, F0);
