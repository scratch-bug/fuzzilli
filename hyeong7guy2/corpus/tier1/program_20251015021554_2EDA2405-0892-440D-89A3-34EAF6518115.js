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
                        const v18 = v7.constructor;
                        v18();
                        v18(v16, F8);
                    }
                    f13();
                    %OptimizeMaglevOnNextCall(f13);
                    return f13;
                }
                f12();
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v23 = new F8();
            class C24 {
                static [v23](a26, a27, a28) {
                }
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v29 = new F0();
class C30 {
    static [v29](a32, a33, a34) {
    }
}
