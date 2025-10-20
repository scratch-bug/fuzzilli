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
            const v40 = {
                [v17]() {
                    function f20(a21) {
                        let v22 = 0;
                        while (v22 < 1) {
                            a = v22++;
                        }
                        for (let i29 = 0, i30 = 10; i30; i30--) {
                        }
                        return f6;
                    }
                    f20();
                    const v39 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v39;
                },
            };
            const v43 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v43, ...v40);
            return v13;
        }
        f6(f6(F1));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v47 = new F1(Symbol, Symbol);
class C48 {
    static [v47](a50, a51, a52) {
    }
}
