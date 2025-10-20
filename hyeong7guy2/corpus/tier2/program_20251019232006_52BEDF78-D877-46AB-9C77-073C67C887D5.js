const v1 = new BigInt64Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17(a18) {
                for (let i = 0; i < 5; i++) {
                }
                return a18;
            }
            f17();
            f17();
            f17(a8);
            Object.defineProperty(this, "e", { get: a13, set: f17 });
            this.e = -1;
        }
        try { new F11(v1); } catch (e) {}
        const v23 = new F11();
        v23.e = v23;
        return F2;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v25 = new F2(F2, F2);
const t26 = v25.constructor;
const v27 = new t26(BigInt64Array, v25);
const v28 = v27.constructor;
new v28();
const v30 = v27.constructor;
new v30(BigInt64Array, v28, v1, v28, v30);
