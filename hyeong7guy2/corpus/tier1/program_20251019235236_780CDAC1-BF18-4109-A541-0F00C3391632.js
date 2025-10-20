class C0 {
}
const v1 = class extends C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.constructor(); } catch (e) {}
    function f7(a8, a9, a10) {
        a9.fromCodePoint = f7;
        function f11(a12, a13) {
            a13.c = a13;
            try { a9.fromCodePoint(); } catch (e) {}
        }
        new Promise(f11);
    }
    f7(F2, v1);
    %OptimizeFunctionOnNextCall(f7);
}
new F2(v1, C0);
new F2();
new F2();
