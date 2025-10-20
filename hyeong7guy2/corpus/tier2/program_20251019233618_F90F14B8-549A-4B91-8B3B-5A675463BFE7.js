function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [-Infinity,2.0,-1000000000.0,-0.0];
            v7[7] = v7;
            return a3;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v8 = new F0();
const v9 = v8.constructor;
const v10 = new v9(v9, F0);
v10.toString(F0);
class C12 {
    static [v8](a14, a15, a16) {
    }
}
