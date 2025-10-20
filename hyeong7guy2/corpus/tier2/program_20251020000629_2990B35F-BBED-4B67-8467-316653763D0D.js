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
            const v33 = {
                [v17]() {
                    function F20(a22, a23) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v24 = new F20(Date, F8);
                    class C25 {
                        static [v24](a27, a28, a29) {
                        }
                    }
                    const v32 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v32;
                },
            };
            const v36 = new Int16Array(a4, a4, a4);
            new Date(WeakSet, Date, 882, ...v36, ...v33);
        }
        f6(f6(Symbol));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v40 = new F1(Symbol, F1);
class C41 {
    static [v40](a43, a44, a45) {
    }
}
