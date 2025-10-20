function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = Symbol.iterator;
            const v17 = {
                [v10]() {
                    const v16 = {
                        next() {
                            const v14 = { done: 10 };
                            v14.hasOwnProperty(a3);
                            return v14;
                        },
                    };
                    return v16;
                },
            };
            const v20 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v20, ...v17);
        }
        f6(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v24 = new F1();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
