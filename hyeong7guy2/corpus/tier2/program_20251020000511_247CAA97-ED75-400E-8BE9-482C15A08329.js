const v0 = [-Infinity,-2.2250738585072014e-308,1000000000.0,-5.0,-2.220446049250313e-16,1000000.0];
function f1(a2) {
    try { a2.call(f1); } catch (e) {}
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                function f11(a12) {
                    const v13 = this.name;
                    v13 == v13;
                    return v13;
                }
                for (let v15 = 0; v15 < 5; v15++) {
                    v0.forEach(f11);
                }
                return a10 & a10;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v18 = new F4();
    const t23 = v18.toString;
    t23();
    return v0;
}
f1(f1);
