function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        const v7 = new SharedArrayBuffer(a3, SharedArrayBuffer);
        const v9 = new DataView(v7);
        let v10;
        try { v10 = v9.getFloat64(a5); } catch (e) {}
        v10 === a5;
        return f4;
    }
    %OptimizeMaglevOnNextCall(f4);
    f4();
}
const v13 = new F0();
const v14 = v13.constructor;
new v14(F0, v13, v14, v13);
