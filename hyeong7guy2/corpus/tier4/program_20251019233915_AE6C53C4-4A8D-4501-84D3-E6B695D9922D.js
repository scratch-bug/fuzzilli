class C0 {
}
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11, a12, a13) {
            for (let v14 = 0; v14 < 5; v14++) {
                function f15() {
                    return a13;
                }
                v14++;
                const v19 = (v14 & 1073741823) / v14;
                v19 / v19;
            }
            for (const v21 in C0) {
            }
            return this;
        }
        f10();
        %OptimizeFunctionOnNextCall(f10);
    }
    new F6();
    const v24 = new F6(a4, C0);
    const t24 = v24.constructor;
    new t24();
}
new F1(C0, F1, C0);
