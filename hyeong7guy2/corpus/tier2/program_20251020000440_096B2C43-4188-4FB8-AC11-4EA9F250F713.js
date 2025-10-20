function f1() {
    return BigInt64Array;
}
Object.defineProperty(BigInt64Array, "d", { configurable: true, enumerable: true, value: f1 });
const v2 = [f1];
function f3(a4) {
    20000 instanceof Float64Array;
    return f3;
}
const v8 = f3(BigInt64Array);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            const v16 = f14[4];
            v2.forEach(v8);
            v16 | 7;
            return 7;
        }
        f14.call(a12);
        f14();
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v22 = new F9();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
for (let i30 = 0, i31 = 10; i31; i31--) {
}
