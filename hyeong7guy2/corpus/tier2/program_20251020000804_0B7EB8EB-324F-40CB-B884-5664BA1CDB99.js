function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a11;
            }
            const v12 = new F8();
            const v13 = v12.e;
            v13 >>> v13;
            const v17 = Symbol.iterator;
            const v26 = {
                [v17]() {
                    let v20 = -65537n;
                    const v21 = v20++;
                    v21 * v21;
                    const v25 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v25;
                },
            };
            const v29 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v29, ...v26);
            return a3;
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v33 = new F1();
class C34 {
    static [v33](a36, a37, a38) {
    }
}
