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
            const v26 = {
                [v17]() {
                    const v24 = {
                        next() {
                            const v21 = { done: 10 };
                            const v23 = { 268435440: 10 };
                            return v21;
                        },
                    };
                    v24.next();
                    return v24;
                },
            };
            const v29 = new Int16Array(a3);
            new Date(WeakSet, Date, 882, ...v29, ...v26);
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v33 = new F0();
class C34 {
    static [v33](a36, a37, a38) {
    }
}
