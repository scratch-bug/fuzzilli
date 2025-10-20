for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        const v3 = new BigUint64Array(v0, v0);
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            v3[Symbol.toStringTag];
        }
        new F4();
        new F4();
        return BigUint64Array;
    }
    f1();
    %OptimizeFunctionOnNextCall(f1);
}
