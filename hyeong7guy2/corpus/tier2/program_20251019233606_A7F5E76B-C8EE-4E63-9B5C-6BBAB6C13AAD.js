class C0 {
}
const v1 = class extends C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        a8.fromCodePoint = f6;
        function f10(a11, a12) {
            a12.c = a12;
            let v13;
            try { v13 = a8.fromCodePoint(); } catch (e) {}
            v13 ?? v13;
        }
        const v16 = new Promise(f10);
        return v16;
    }
    f6(F2, v1);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
new F2();
