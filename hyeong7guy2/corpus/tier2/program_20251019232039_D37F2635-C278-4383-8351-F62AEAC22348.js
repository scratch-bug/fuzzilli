function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = [F0];
function f6(a7) {
    for (let v8 = 0; v8 < 5; v8++) {
        v8 << Math.abs(v8);
    }
    return f6;
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    function f16() {
        function f17(a18) {
            v5.forEach(f6);
        }
        f17(f17.call());
        %OptimizeMaglevOnNextCall(f17);
        return f17;
    }
    Object.defineProperty(this, "toString", { get: f16 });
}
const v22 = new F12(v5, v5);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
