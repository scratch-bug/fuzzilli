const v0 = [];
for (let v1 = 0; v1 < 10; v1++) {
    function f2() {
        const v3 = [1e-15,303.3206814842317,1000.0];
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            function f8() {
                function f9(a10) {
                    v0.map(v3.constructor);
                    return v0;
                }
                return f9;
            }
            Object.defineProperty(this, "toString", { get: f8 });
        }
        const v13 = new F4(v3, F4);
        return v13.toString();
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
