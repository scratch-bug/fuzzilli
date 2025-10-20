function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v11 = Symbol.iterator;
            const v21 = {
                [v11]() {
                    const v20 = {
                        next() {
                            const v15 = { done: 10 };
                            const v17 = null && -9.894395456883155e+307;
                            null ^ v15;
                            v17 && v15;
                            return v15;
                        },
                    };
                    return v20;
                },
            };
            const v24 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v24, ...v21);
        }
        f8();
        f8(WeakSet);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v28 = new F3();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
