function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = "p" + "p";
            try { v8(); } catch (e) {}
            v8[1];
            return a6;
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
