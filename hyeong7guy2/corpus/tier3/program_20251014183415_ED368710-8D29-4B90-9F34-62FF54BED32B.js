function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        for (let i = 0; i < 5; i++) {
            function F5(a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
                function f9(a10, a11, a12) {
                    function F13(a15, a16, a17, a18) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v19 = new F13();
                    const t11 = v19.constructor;
                    new t11();
                }
                f9(Uint16Array, a4, F1);
                %OptimizeFunctionOnNextCall(f9);
            }
            new F5(this, a3);
        }
    }
}
new F1();
