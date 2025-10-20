function F0() {
    if (!new.target) { throw 'must be called with new'; }
    try { this(); } catch (e) {}
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        class C11 {
        }
        C11.h = a5;
        C11.h = a6;
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = new F0();
            function f19(a20, a21) {
                return f19;
            }
            v18[f19] = f19 !== v18;
        }
        const v23 = new F12(a8, a5, F3, F3);
        return v23;
    }
    f7(f7, F3, this);
    %OptimizeFunctionOnNextCall(f7);
}
const v25 = new F3();
const v26 = new F3(v25, v25);
new F3(v25, v26);
