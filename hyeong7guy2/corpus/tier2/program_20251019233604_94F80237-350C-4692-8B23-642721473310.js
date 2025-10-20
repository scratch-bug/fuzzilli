function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = new F8(f6, f6);
            const v13 = v12.e;
            v13 >>> v13;
            const v17 = Symbol.iterator;
            const v29 = {
                [v17]() {
                    function F20(a22, a23) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    F20.d = -268435456;
                    F20.d = -268435456;
                    F20.d >>>= 100000;
                    const v28 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v28;
                },
            };
            const v32 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v32, ...v29);
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v36 = new F1();
class C37 {
    static [v36](a39, a40, a41) {
    }
    static [v36](a43, a44, a45) {
    }
}
