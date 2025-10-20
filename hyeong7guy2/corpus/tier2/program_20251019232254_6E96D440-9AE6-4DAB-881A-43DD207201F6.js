function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v9 = 2.0;
            v9--;
            Math.abs(v9);
            const v12 = class {
            }
            const v13 = Symbol.iterator;
            const v27 = {
                [v13]() {
                    const v26 = {
                        construct(a16, a17) {
                            const v25 = {
                                m(a19, a20, a21, a22) {
                                    return eval();
                                },
                            };
                            return F1;
                        },
                    };
                },
            };
        }
        f6();
        f6(f5);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v30 = new F1(F1, Symbol);
class C31 {
    static [v30](a33, a34, a35) {
    }
}
