function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v8;
            try { v8 = undefined(); } catch (e) {}
            typeof (v8 ?? f5);
            return a2;
        }
        f5();
        f5(this);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
