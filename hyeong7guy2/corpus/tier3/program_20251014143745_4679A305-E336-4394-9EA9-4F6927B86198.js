for (let i = 0; i < 5; i++) {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        function f4(a5, a6, a7) {
            const v10 = [-11];
            function F11(a13, a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                a15.g = a15;
                this.f = a16;
            }
            const v17 = new F11(Int8Array, 1825, F11);
            const t11 = v17.constructor;
            new t11(v17, v10, v17);
            return a7;
        }
        f4();
        %OptimizeFunctionOnNextCall(f4);
    }
    new F0();
}
