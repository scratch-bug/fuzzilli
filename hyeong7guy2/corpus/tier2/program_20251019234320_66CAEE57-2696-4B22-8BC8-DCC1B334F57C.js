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
            v12 ^ v12;
            const v17 = Symbol.iterator;
            const v24 = {
                [v17]() {
                    this >> 10;
                    const v23 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v23;
                },
            };
            const v27 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v27, ...v24);
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v31 = new F0(F0, F0);
class C32 {
    static [v31](a34, a35, a36) {
    }
}
