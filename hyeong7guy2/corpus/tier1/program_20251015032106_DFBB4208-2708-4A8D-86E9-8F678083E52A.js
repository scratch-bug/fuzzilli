function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [693913.4712015034,-314050.5385797281];
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function f12() {
                    function f13(a14) {
                        const v16 = -9007199254740990 >> a10;
                        const t10 = v7.constructor;
                        t10(v16, F8);
                    }
                    %OptimizeMaglevOnNextCall(f13);
                    return f13;
                }
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v19 = new F8();
            class C20 {
                static [v19](a22, a23, a24) {
                }
            }
        }
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
