function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [693913.4712015034,-314050.5385797281];
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function f12() {
                    function f13(a14) {
                        let v16 = -639820461 + -639820461;
                        v16++;
                        const v18 = v16--;
                        const v19 = v7.constructor;
                        v19.bind(v18);
                        v19(v16, F8);
                    }
                    f13();
                    %OptimizeMaglevOnNextCall(f13);
                    return f13;
                }
                f12();
                Object.defineProperty(this, "toString", { get: f12 });
            }
            const v24 = new F8(F0, F8);
            class C25 {
                static [v24](a27, a28, a29) {
                }
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0(F0, F0);
class C31 {
    static [v30](a33, a34, a35) {
    }
}
