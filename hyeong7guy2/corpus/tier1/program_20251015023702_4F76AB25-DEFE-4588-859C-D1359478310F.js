function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                a13--;
                this.e = a13;
            }
            const v15 = new F10("2147483647", -3612);
            const v16 = v15.e;
            v16 - v16;
            new F10();
            const v22 = Symbol.iterator;
            const v28 = {
                [v22]() {
                    const v27 = {
                        next() {
                            return { done: 10 };
                        },
                        ..."boolean",
                    };
                    return v27;
                },
            };
            const v31 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v31, ...v28);
            return 882;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v35 = new F1(F1, "boolean");
class C36 {
    static [v35](a38, a39, a40) {
    }
}
