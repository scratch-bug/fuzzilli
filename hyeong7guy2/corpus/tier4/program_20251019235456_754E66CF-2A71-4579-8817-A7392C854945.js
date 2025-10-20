const v0 = /9(?<a>.)/uyg;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        try { a8(); } catch (e) {}
        for (let v10 = 0; v10 < 5; v10++) {
            try {
                v0.exec(a7);
            } catch(e12) {
            }
        }
        let v14;
        try { v14 = String.fromCodePoint(a6); } catch (e) {}
        return v14;
    }
    f5(F1, F1, a3);
    f5(F1, a3, a3);
    %OptimizeFunctionOnNextCall(f5);
}
const v17 = new F1(F1);
const t20 = v17.constructor;
new t20();
for (let i22 = 0, i23 = 10; i23; i23--) {
}
