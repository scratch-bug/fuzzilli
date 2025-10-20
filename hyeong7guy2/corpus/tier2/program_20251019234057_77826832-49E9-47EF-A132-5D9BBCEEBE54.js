class C0 {
}
const v1 = class extends C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.constructor(a5, a5); } catch (e) {}
    function f7(a8, a9, a10) {
        a9.fromCodePoint = f7;
        function f11(a12, a13) {
            a13.c = a13;
            try { a9.fromCodePoint(); } catch (e) {}
            return a10;
        }
        new Promise(f11);
        return v1;
    }
    const v17 = f7(F2, v1);
    v17.d = v17;
    %OptimizeFunctionOnNextCall(f7);
}
const v18 = new F2();
const v19 = v18.constructor;
new v19(v19, v1, F2);
