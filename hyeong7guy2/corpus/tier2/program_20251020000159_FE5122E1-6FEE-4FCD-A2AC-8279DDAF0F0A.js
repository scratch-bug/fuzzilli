function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v11 = Symbol.iterator;
            const v21 = {
                [v11]() {
                    let v13 = 10;
                    v13++;
                    const t2 = {};
                    t2.d >>>= -128;
                    function f16(a17) {
                        return f16;
                    }
                    const v20 = {
                        next() {
                            return { done: v13 };
                        },
                    };
                    return v20;
                },
            };
            const v24 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v24, ...v21);
            return -128;
        }
        f7(f7);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v28 = new F2();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
