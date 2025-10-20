function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                a13++;
                this.e = a13;
            }
            const v15 = new F10("2147483647", -3612);
            const v16 = v15.e;
            const v17 = v16 < v16;
            new F10(v16, Symbol);
            const v21 = Symbol.iterator;
            const v30 = {
                [v21]() {
                    const v24 = -10;
                    -(v24 / v24);
                    const v29 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v29;
                },
            };
            const v33 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v33, ...v30);
            return v17;
        }
        f6(f6(this));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v37 = new F1();
class C38 {
    static [v37](a40, a41, a42) {
    }
}
