function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a11;
            }
            const v12 = new F8();
            const v13 = v12.e;
            v13 >>> v13;
            const v17 = Symbol.iterator;
            const v25 = {
                [v17]() {
                    -65537n / -65537n;
                    const v24 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v24;
                },
            };
            const v28 = new Int16Array(v25);
            new Date(WeakSet, Date, 882, ...v28, ...v25);
            return a4;
        }
        f6(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v32 = new F1();
class C33 {
    static [v32](a35, a36, a37) {
    }
}
