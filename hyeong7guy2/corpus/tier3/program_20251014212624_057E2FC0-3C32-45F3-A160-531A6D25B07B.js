function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new Int32Array(512);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14(a15) {
        const v16 = v9[7];
        F1.toString();
        new Uint8Array(v16);
        return 7;
    }
    f14(F10);
    const v20 = f14(7);
    %OptimizeMaglevOnNextCall(f14);
    f14(v20);
}
new F10(v9, Int32Array);
