function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = this.e;
            v8 >>> v8;
            const v12 = Symbol.iterator;
            const v20 = {
                [v12]() {
                    let v15 = -65537n;
                    v15--;
                    const v19 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v19;
                },
            };
            const v23 = new Int16Array();
            const v24 = new Date(WeakSet, Date, 882, ...v23, ...v20);
            let v25 = v24.setMonth();
            v25++;
            return a4;
        }
        f6(F1);
        f6(Symbol);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v29 = new F1();
class C30 {
    static [v29](a32, a33, a34) {
    }
}
