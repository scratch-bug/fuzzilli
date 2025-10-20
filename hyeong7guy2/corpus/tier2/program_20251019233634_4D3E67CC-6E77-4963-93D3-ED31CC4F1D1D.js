function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C4 {
    }
    function f7(a8) {
        for (let v9 = 0; v9 < 5; v9++) {
            const v10 = {};
            function f11(a12, a13) {
                const v16 = new SharedArrayBuffer(7);
                const v18 = new DataView(v16);
                v18.setFloat16(v10, C4, C4);
                return a8;
            }
            f11();
            %OptimizeFunctionOnNextCall(f11);
        }
    }
    function F21(a23) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i26 = 0, i27 = 10; i27; i27--) {
    }
    F21[Symbol.toPrimitive] = f7;
    const v37 = {
        o(a35, a36) {
            super[F21] = 12234;
            return 12234;
        },
    };
    v37.o();
}
new F0(F0, F0);
