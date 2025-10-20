function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        const v14 = [-28740];
        class C15 {
        }
        function F17(a19, a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            const v23 = a22.constructor;
            try { v23(a11); } catch (e) {}
        }
        const v25 = new F17(v14, -1, C15, -9007199254740992n);
        const t16 = v25.constructor;
        new t16(v2, v25, BigInt64Array, v2);
        return -9007199254740992n;
    }
    f9(a8, a7);
    %OptimizeFunctionOnNextCall(f9);
}
const v29 = new F5(v2, F0);
const t24 = v29.constructor;
new t24(6n);
new F5(F0, F5);
