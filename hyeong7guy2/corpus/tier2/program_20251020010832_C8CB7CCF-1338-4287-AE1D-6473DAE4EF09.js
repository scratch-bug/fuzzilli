function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10; i7; i7--) {
    }
    function f13() {
        function f14(a15) {
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                function f20() {
                    function f21(a22) {
                        const v23 = /rB/gmv;
                        try { Object.defineProperty(Object, a22, this); } catch (e) {}
                        Object.keys(v23);
                    }
                    %OptimizeMaglevOnNextCall(f21);
                    return f21;
                }
                Object.defineProperty(this, "toString", { get: f20 });
            }
            const v27 = new F16(f14, a15);
            class C28 {
                static [v27](a30, a31, a32) {
                }
            }
        }
        f14();
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v34 = new F0();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
