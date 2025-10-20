function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = new Float32Array(2439);
            v9[1096];
            v9[1096];
            return v9;
        }
        f5(f4);
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
const t17 = v14.toString;
t17();
