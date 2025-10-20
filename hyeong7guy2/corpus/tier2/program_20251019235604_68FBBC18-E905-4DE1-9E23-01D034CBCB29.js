function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a10;
            }
            const v11 = new F7(F0, a3);
            const v12 = v11.e;
            v12 >>> v12;
            const v17 = Symbol.iterator;
            const v25 = {
                [v17]() {
                    -65537n ^ -65537n;
                    const v24 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v24;
                },
            };
            const v28 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v28, ...v25);
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v32 = new F0();
class C33 {
    static [v32](a35, a36, a37) {
    }
}
