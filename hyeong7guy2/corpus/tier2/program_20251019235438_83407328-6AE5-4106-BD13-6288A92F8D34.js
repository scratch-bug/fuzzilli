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
            const v27 = {
                month: -9007199254740990,
                [v18]() {
                    function f21() {
                        typeof f21;
                        return v14;
                    }
                    f21();
                    const v26 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v26;
                },
            };
            const v30 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v30, ...v27);
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v34 = new F2();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
