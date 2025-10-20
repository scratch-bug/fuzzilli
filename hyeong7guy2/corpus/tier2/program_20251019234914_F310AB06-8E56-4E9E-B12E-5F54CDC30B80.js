class C1 extends WeakMap {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            f8[4] | 7;
            const v14 = { a: 1.1 };
            C1[168] -= 8.970021859904494e+307;
            let v15 = f7.bind(v14);
            return 8.970021859904494e+307;
        }
        f8();
        f8(WeakMap);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v18 = new F3();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
