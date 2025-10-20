function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function f12() {
                    function f13(a14) {
                        this.f = "NFC";
                        return a14;
                    }
                    const v15 = {};
                    function f16(a17, a18) {
                        a17 instanceof f12;
                    }
                    v15.set = f16;
                    const v21 = new Proxy(this, v15);
                    try { v21.toString(); } catch (e) {}
                    return f13;
                }
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v23 = new F8();
            v23.toString();
            function F27(a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                a30++;
                this.e = a30;
            }
            const v32 = new F27("2147483647", -3612);
            Temporal.Duration;
            v32.toString();
            new F27();
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v39 = new F0(F0, F0);
class C40 {
    static [v39](a42, a43, a44) {
    }
}
