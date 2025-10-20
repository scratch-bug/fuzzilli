function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            return a8;
        }
        function f12(a13) {
            for (let v14 = 0; v14 < 5; v14++) {
                try {
                    this.n(F1, a10);
                } catch(e16) {
                }
                Math.sinh(a13);
                const v20 = {
                    get g() {
                        return a8;
                    },
                };
            }
            return a13;
        }
        for (let i22 = 2147483648, i23 = 10; i23; i23--) {
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
    }
    const v29 = new F5(a4, this, 2147483648, a4);
    v29.e = v29;
    %OptimizeFunctionOnNextCall(F1);
}
new F1();
new F1();
new F1(F1, 2147483648);
