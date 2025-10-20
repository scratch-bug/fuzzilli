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
            const v18 = Symbol.iterator;
            const v30 = {
                [v18]() {
                    this.n(a4);
                    const v24 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v24;
                },
                n(a26, a27, a28) {
                    let v29;
                    try { v29 = a26.apply(F8, 42345); } catch (e) {}
                    return v29;
                },
            };
            const v33 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v33, ...v30);
        }
        f6(f6(a3));
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
