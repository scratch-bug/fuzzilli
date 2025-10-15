function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try { a6.apply(f4, this, a6, this, f5); } catch (e) {}
            const v11 = new Float64Array(9);
            v11[1] = v11;
            v11.set(9);
            return a3;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0();
const v14 = v13.constructor;
const v15 = new v14(v13, F0, v14);
v15.toString();
class C17 {
    static [v13](a19, a20, a21) {
    }
}
