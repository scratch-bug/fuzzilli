function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v12 = Symbol.iterator;
            const v18 = {
                [v12]() {
                    const v17 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    const t5 = -2.2250738585072014e-308;
                    t5[10] |= 33598;
                    return v17;
                },
            };
            const v21 = new BigUint64Array(882, a4, 882);
            with (v21) {
                const v23 = new Float64Array(33598);
                v23[11768] = v23;
                buffer.transfer(v21);
            }
            new Date(WeakSet, Date, 882, ...v18, ...v18);
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v27 = new F2();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
class C33 {
    static [v27](a35, a36, a37) {
    }
    static [v27](a39, a40, a41) {
    }
}
