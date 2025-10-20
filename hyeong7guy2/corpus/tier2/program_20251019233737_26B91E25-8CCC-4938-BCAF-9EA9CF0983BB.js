function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 4294967296;
            v7--;
            const v10 = new Int32Array();
            v10.fill(v7);
            return f5;
        }
        f5.apply(F0, this);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
const t18 = v14.toString;
t18();
