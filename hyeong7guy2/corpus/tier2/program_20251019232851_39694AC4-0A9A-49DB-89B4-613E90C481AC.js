function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v8 = 0; v8 < 5; v8++) {
                const t5 = v8 ? { a: 1 } : Object;
                t5.toISOString = 1;
            }
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.d = f5;
        }
        f5();
        f5();
    }
    f4.apply();
    f4();
    %OptimizeMaglevOnNextCall(f4);
    f4();
}
new F0(F0, F0);
