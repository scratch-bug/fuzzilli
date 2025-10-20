function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return f11;
        }
        function f12(a13) {
            for (let v14 = 0; v14 < 5; v14++) {
                const v15 = 2147483648 * v14;
                v15 << v15;
                Math.sinh(a13);
                const v20 = {
                    get g() {
                        return this;
                    },
                };
            }
            return a9;
        }
        for (let i22 = 2147483648, i23 = 10; i23; i23--) {
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
    }
    const v29 = new F5();
    v29.e = v29;
    %OptimizeFunctionOnNextCall(F1);
}
new F1();
new F1();
new F1();
