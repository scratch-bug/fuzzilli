function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = {};
            for (let v11 = 0; v11 < 5; v11++) {
                Date.now(9, v11, v11, ..."formatToParts");
            }
            const v14 = Symbol.dispose;
            const v16 = {
                [v14]() {
                },
            };
            using v17 = v16;
            eval();
        }
        f5(F0);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { enumerable: true, get: f4 });
}
const v22 = new F0(F0, F0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
