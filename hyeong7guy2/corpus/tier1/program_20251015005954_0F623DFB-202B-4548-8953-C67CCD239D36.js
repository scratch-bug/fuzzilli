function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = new Date(a6);
            try { v8(F0, f5); } catch (e) {}
            v8.getTime();
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v11 = new F0(F0, F0);
class C12 {
    static [v11](a14, a15, a16) {
    }
    static [v11](a18, a19, a20) {
    }
}
