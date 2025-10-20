function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return F0;
        }
        %OptimizeMaglevOnNextCall(f5.length);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v8 = new F0(F0, F0);
v8.toString();
