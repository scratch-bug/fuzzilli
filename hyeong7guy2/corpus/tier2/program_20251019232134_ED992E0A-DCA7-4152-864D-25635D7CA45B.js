function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = F8.e;
            const v13 = v12 >>> v12;
            const v17 = Symbol.iterator;
            const v29 = {
                [v17]() {
                    this.n(a4);
                    const v23 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v23;
                },
                n(a25, a26, a27) {
                    try { a25.apply(F8, 42345); } catch (e) {}
                    return a27;
                },
            };
            v29.n(v13);
            const v33 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v33, ...v29);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v37 = new F1(F1, F1);
class C38 {
    static [v37](a40, a41, a42) {
    }
}
