function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = Array.prototype;
            const v9 = v8.pop;
            const t6 = v9.constructor;
            const t7 = t6();
            const v12 = t7(f5, F0, f4, f4, f5);
            v9.call(v8);
            return v12;
        }
        f5(a2);
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
