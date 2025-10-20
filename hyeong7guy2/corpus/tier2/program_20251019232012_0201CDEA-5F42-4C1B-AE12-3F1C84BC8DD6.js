function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = F8 < F8;
            const v15 = Symbol.iterator;
            const v23 = {
                [v15]() {
                    let v18 = 10 - v12;
                    v18--;
                    const v22 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v22;
                },
            };
            const v26 = new Int16Array(Symbol, 882, 882);
            new Date(WeakSet, Date, 882, ...v26, ...v23);
        }
        f6(Symbol);
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v30 = new F1(F1, F1);
class C31 {
    static [v30](a33, a34, a35) {
    }
}
