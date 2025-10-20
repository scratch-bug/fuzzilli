const v0 = [-Infinity,-2.2250738585072014e-308,1000000000.0,-5.0,-2.220446049250313e-16,1000000.0];
function f1(a2) {
    try { a2.call(); } catch (e) {}
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                function f11(a12) {
                    this.name;
                    return this;
                }
                for (let v14 = 0; v14 < 5; v14++) {
                    v0.forEach(f11);
                    const v18 = {
                        [Symbol]() {
                        },
                    };
                }
                return this;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v19 = new F4();
    const t26 = v19.toString;
    t26();
    return a2;
}
f1(f1);
