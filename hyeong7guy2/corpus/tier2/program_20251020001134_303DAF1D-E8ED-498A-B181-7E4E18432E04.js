const v0 = [];
function f2(a3) {
    a3 >> a3;
    return f2;
}
const v5 = f2(536870888n);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const v13 = f11[4];
            v0.forEach(v5);
            return v13 | 7;
        }
        f11.call(f10);
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v19 = new F6(f2, v0);
const t22 = v19.toString;
t22();
