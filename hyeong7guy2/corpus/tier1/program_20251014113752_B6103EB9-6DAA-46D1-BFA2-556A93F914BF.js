function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                f5.next();
                return f4;
            }
            try { f7.call(); } catch (e) {}
            const v11 = Symbol.for(a6);
            function f12() {
                class C13 extends v11 {
                }
                return F0;
            }
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
