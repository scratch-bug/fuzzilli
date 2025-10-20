function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a10;
            }
            const v11 = new F7(this, a6);
            const v12 = v11.e;
            v12 >>> v12;
            const v17 = Symbol.iterator;
            const v27 = {
                [v17]() {
                    const v20 = new Int16Array();
                    const v21 = v20.length;
                    const v22 = { millisecond: v21 };
                    const v26 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v26;
                },
            };
            const v30 = new Int16Array(v27, a6);
            new Date(WeakSet, Date, 882, ...v30, ...v27);
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v34 = new F0();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
