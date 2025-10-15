function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12--;
                this.e = a12;
            }
            const v14 = new F9("2147483647", -3612);
            const v15 = v14.e;
            v15 - v15;
            new F9();
            const v19 = new Uint32Array();
            const v23 = Symbol.iterator;
            const v30 = {
                [v23]() {
                    v19[376924296];
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
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v37 = new F0(F0, F0);
class C38 {
    static [v37](a40, a41, a42) {
    }
}
