function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function f12() {
                    function f13(a14) {
                        const v15 = new Date();
                        v15.toTemporalInstant();
                        v15.getTime();
                    }
                    %OptimizeMaglevOnNextCall(f13);
                    return f13;
                }
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v18 = new F8(Date, f5);
            class C19 {
                static [v18](a21, a22, a23) {
                }
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v24 = new F0();
class C25 {
    static [v24](a27, a28, a29) {
    }
    static [v24](a31, a32, a33) {
    }
}
