function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = new Int8Array();
            const v16 = v15.__proto__;
            try { v16.entries(a7, F0, a3, a11); } catch (e) {}
        }
        new F8(f4, a5, f4, a5);
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0(F0, F0);
const t16 = v20.constructor;
const v22 = new t16();
new F0(v22, v22);
