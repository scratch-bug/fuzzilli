function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v11 = Symbol.iterator;
            const v20 = {
                [v11]() {
                    const t0 = {};
                    t0.d >>>= -128;
                    const v19 = {
                        next() {
                            eval(a4);
                            return { done: 10 };
                        },
                    };
                    return v19;
                },
            };
            const v23 = new Int16Array(a8, a5, -128);
            new Date(WeakSet, Date, 882, ...v23, ...v20);
            return -128;
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v27 = new F2();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
