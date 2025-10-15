function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Uint8Array;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        const v12 = new F1();
        v12.b;
        return a9;
    }
    f8();
    %OptimizeFunctionOnNextCall(f8);
}
const v15 = new F4(F1, Uint8Array);
const v16 = v15.constructor;
new v16(v16, v15, Uint8Array, Uint8Array, F4);
new F4();
