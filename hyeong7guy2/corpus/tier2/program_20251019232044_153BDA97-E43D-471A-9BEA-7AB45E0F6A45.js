function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = "16" + F8;
            F8[v13];
            function f15() {
                Object.defineProperty(Temporal, v13, { writable: true, value: this });
                return f6;
            }
            const v16 = [0.3355499447371395];
            class C18 extends Date {
            }
            const v24 = {
                [Symbol]() {
                    f15 = C18;
                    const v23 = {
                        next() {
                            v16 ?? v16;
                            return this;
                        },
                    };
                },
            };
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v27 = new F1();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
