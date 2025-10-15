/abc+\p{Script_Extensions=Greek}(?<!)Ya\nb\bclR\P{Decimal_Number}a{0,1}?\P{gc=Decimal_Number}?/mvgsy;
const v9 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14(a15, a16, a17) {
        try { a17.reduceRight(); } catch (e) {}
        return a15;
    }
    f14(a13, f14, v9);
    f14();
    %OptimizeFunctionOnNextCall(f14);
}
const v23 = new F10(F10, "iUAW");
const v24 = v23.constructor;
new v24();
const t15 = v23.constructor;
new t15(v24, -2n, v23, BigUint64Array, v24);
