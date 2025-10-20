function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = Symbol.iterator;
            const v20 = {
                [v10]() {
                    const v19 = {
                        next() {
                            const v14 = { done: 10 };
                            const v17 = Array.prototype.push;
                            try { v17(); } catch (e) {}
                            return v14;
                        },
                    };
                    return v19;
                },
            };
            const v23 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v23, ...v20);
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0(F0, F0);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
