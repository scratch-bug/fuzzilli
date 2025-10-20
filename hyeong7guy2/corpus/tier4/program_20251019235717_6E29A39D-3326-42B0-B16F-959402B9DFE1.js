function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 5; v5++) {
        function f6() {
            const v10 = !-10;
            const v11 = "NFKD" || 536870887;
            v11 && (536870887 | v10);
        }
        f6();
        %OptimizeFunctionOnNextCall(f6);
    }
}
new F0();
