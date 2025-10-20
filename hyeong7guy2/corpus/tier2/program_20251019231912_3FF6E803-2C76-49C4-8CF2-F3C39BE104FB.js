function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = Symbol.iterator;
            const v20 = {
                [v10]() {
                    let v12 = 10;
                    const v13 = v12 % v12;
                    v13 >>> v13;
                    v12--;
                    const v18 = {
                        next() {
                            return { done: v12 };
                        },
                    };
                    v18.next();
                    return v18;
                },
            };
            const v23 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v23, ...v20);
            return a3;
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v27 = new F1();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
