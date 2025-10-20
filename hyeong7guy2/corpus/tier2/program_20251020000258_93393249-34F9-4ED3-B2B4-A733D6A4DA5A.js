function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v11 = Symbol.iterator;
            const v21 = {
                [v11]() {
                    let v13 = 10;
                    const v14 = v13 % v13;
                    v14 >>> v14;
                    v13--;
                    const v19 = {
                        next() {
                            return { done: v13 };
                        },
                    };
                    undefined = BigUint64Array;
                    return v19;
                },
            };
            const v24 = new Int16Array(Date, a6, 882);
            new Date(WeakSet, Date, 882, ...v24, ...v21);
        }
        f8(f7);
        f8();
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
