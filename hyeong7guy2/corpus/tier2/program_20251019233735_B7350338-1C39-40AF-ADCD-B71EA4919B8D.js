function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                return f5;
            }
            const v18 = {
                construct(a9, a10) {
                    function f11(a12, a13) {
                        class C15 extends Array {
                        }
                        const v16 = new C15();
                        v16[778588951] = v16;
                        return this;
                    }
                    a9.toString = f11;
                    a9.toString(a9);
                    return f5;
                },
            };
            v18.construct(f7);
        }
        f5(F0);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
