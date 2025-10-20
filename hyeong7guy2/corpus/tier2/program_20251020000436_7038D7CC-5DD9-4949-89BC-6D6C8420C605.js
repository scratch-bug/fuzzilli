function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = ([F0])[4];
            function f10() {
                ("MIN_SAFE_INTEGER")[("MIN_SAFE_INTEGER").fontsize(F0, f5)];
                return 7;
            }
            ({ construct: f10 }).construct(f10);
            v8 | 7;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
