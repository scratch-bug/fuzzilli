function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = `3${0n}valueOf`;
        const v11 = new Uint8Array(Uint8Array, a6);
        v11[31] = v11;
        return v9.match;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v14 = new F0(F0, F0);
const v15 = v14.constructor;
new v15(v15, v14);
new F0();
