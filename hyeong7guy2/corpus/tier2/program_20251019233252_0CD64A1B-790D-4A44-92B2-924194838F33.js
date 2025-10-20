function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a12;
            }
            const v13 = new F9();
            const v14 = v13.e;
            v14 >>> v14;
            const v18 = Symbol.iterator;
            const v25 = {
                [v18]() {
                    const t0 = {};
                    t0.d >>>= -128;
                    const v24 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v24;
                },
            };
            const v28 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v28, ...v25);
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v32 = new F2(-128, F2);
class C33 {
    static [v32](a35, a36, a37) {
    }
}
