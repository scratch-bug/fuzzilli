function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = Symbol.iterator;
            const v22 = {
                [v10]() {
                    a4 >>> a4;
                    const v15 = new SharedArrayBuffer();
                    const v17 = new DataView(v15);
                    try { v17.getInt32(); } catch (e) {}
                    const v21 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v21;
                },
            };
            const v25 = new Int16Array();
            new Date(WeakSet, F1, 882, ...v25, ...v22);
            return v10;
        }
        f6(f6(f6));
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
