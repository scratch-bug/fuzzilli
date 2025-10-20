const v2 = {
    set e(a1) {
    },
};
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a14;
            }
            const v15 = new F11();
            const v16 = v15.e;
            let v17 = v16 >>> v16;
            const v20 = Symbol.iterator;
            const v26 = {
                [v20]() {
                    ({"e":v17,} = v2);
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
        }
        f9(f9);
        f9(a6);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v33 = new F4();
class C34 {
    static [v33](a36, a37, a38) {
    }
}
