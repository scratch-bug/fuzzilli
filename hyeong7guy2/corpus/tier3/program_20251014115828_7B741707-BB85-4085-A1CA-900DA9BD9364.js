function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v13 = new SharedArrayBuffer(1878, { maxByteLength: 1073741824 });
        const v14 = new Int16Array(v13);
        v14[152] = v14;
        v14[131];
        return f4;
    }
    f4(F0, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v18 = new F0();
const t14 = v18.constructor;
new t14();
