Symbol.iterator;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            const v13 = f9[4] | 7;
            const v15 = { a: 1.1 };
            for (let v16 = 0; v16 < 5; v16++) {
                class C17 {
                    static [v15](a19, a20) {
                    }
                }
                Array(v13);
            }
        }
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v22 = new F4();
class C23 {
    static [v22](a25, a26, a27) {
    }
    static [v22](a29, a30, a31) {
    }
}
