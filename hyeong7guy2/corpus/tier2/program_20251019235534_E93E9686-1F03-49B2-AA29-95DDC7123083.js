function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [693913.4712015034,-314050.5385797281];
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function f12() {
                    function f13(a14) {
                        const v16 = -639820461 * a10;
                        v16 & v16;
                        const t10 = v7.constructor;
                        t10(v16, F8);
                    }
                    f13(f13);
                    %OptimizeMaglevOnNextCall(f13);
                    return f13;
                }
                f12();
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v22 = new F8();
            class C23 {
                static [v22](a25, a26, a27) {
                }
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v28 = new F0(F0, F0);
class C29 {
    static [v28](a31, a32, a33) {
    }
}
