function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a10;
            }
            const v11 = new F7();
            const v12 = v11.e;
            v12 >>> v12;
            const v17 = Symbol.iterator;
            const v28 = {
                [v17]() {
                    this.n(a3);
                    const v23 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v23;
                },
                n(a25, a26, a27) {
                    a25.length = a25;
                    return f5;
                },
            };
            const v31 = new Int16Array(Symbol, 882, 882);
            new Date(WeakSet, Date, 882, ...v31, ...v28);
        }
        f5(f5(f5));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v35 = new F0(F0, F0);
class C36 {
    static [v35](a38, a39, a40) {
    }
}
