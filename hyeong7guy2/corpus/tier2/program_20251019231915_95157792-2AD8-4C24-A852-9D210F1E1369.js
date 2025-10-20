function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const t4 = [-Infinity,2.0,-1000000000.0,-0.0];
            t4[7] = 4096;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v9 = new F0(F0, F0);
const t13 = v9.constructor;
const v11 = new t13();
v11.toString();
class C13 {
    static [v9](a15, a16, a17) {
    }
}
