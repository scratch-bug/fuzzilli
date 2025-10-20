function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            Object.preventExtensions(Array.prototype);
            WeakMap[8] = 2;
            WeakMap = [2,2,2];
            return f5;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
const v17 = v16.toString;
v17(F0, v16, v17, F0, F0);
