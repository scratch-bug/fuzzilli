function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9, a10) {
                function F13(a15, a16, a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                    a18--;
                    this.f = a18;
                }
                const v20 = new F13(Int8Array, 1825, F13, 1825);
                const t11 = v20.constructor;
                new t11(f5, Int8Array, f5, f4);
                return a9;
            }
            f7();
            ([f5,f5,f5,f5])[4] | 7;
        }
        f5(a2);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0(F0, F0);
class C31 {
    static [v30](a33, a34, a35) {
    }
}
