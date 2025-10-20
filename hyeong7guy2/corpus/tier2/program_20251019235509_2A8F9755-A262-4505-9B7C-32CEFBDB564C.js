function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = Symbol.iterator;
            const v22 = {
                [v10]() {
                    let v12 = 10;
                    Math.abs(-1);
                    const v16 = v12 % v12;
                    v16 >>> v16;
                    v12--;
                    const v21 = {
                        next() {
                            return { done: v12 };
                        },
                    };
                    return v21;
                },
            };
            const v25 = new Int16Array(a3);
            new Date(WeakSet, Date, 882, ...v25, ...v22);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v29 = new F1(F1, F1);
class C30 {
    static [v29](a32, a33, a34) {
    }
}
