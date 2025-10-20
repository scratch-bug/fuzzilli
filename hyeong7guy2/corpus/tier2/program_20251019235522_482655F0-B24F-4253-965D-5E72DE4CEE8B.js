function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7();
            class C12 {
                static [v11](a14, a15, a16) {
                }
            }
            this[4] | 7;
            arguments[2];
        }
        f5(f4);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v24 = new F0();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
