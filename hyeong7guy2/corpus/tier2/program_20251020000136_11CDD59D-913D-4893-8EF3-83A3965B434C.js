function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [693913.4712015034,-314050.5385797281];
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function f12() {
                    function f13(a14) {
                        const v16 = v7.constructor;
                        try { v16(-639820461); } catch (e) {}
                    }
                    f13();
                    %OptimizeMaglevOnNextCall(f13);
                    return f13;
                }
                f12();
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v20 = new F8(a6, a6);
            class C21 {
                static [v20](a23, a24, a25) {
                }
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
