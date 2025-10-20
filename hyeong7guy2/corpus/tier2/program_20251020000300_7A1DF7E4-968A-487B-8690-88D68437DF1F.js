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
            const v17 = Symbol.iterator;
            const v28 = {
                [v17]() {
                    class C20 {
                    }
                    function f21() {
                        new C20(...arguments);
                        return arguments;
                    }
                    f21();
                    const v27 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v27;
                },
            };
            const v31 = new Int16Array(this, 882, 882);
            new Date(WeakSet, Date, 882, ...v31, ...v28);
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v35 = new F1(Symbol, F1);
class C36 {
    static [v35](a38, a39, a40) {
    }
}
