function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = F9 - F9;
            const v14 = v13 ^ v13;
            const v17 = Symbol.iterator;
            const v24 = {
                [v17]() {
                    class C19 {
                        static g;
                    }
                    const v23 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v23;
                },
            };
            const v26 = new Int16Array(v14);
            new Date(WeakSet, Date, -3612, ...v26, ...v24);
        }
        f6(f5);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v30 = new F1(F1, Symbol);
v30.toString(F1, Symbol, F1, v30, v30);
class C32 {
    static [v30](a34, a35, a36) {
    }
}
