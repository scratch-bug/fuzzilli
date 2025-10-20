const v3 = new Uint8ClampedArray(129);
const v5 = new Int16Array(50);
function f6() {
    return v5;
}
const v7 = [693913.4712015034,-314050.5385797281];
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a10, "constructor", { enumerable: true, value: f6 });
    function f12() {
        function f13(a14) {
            const t11 = v7.constructor;
            t11(f12)[22];
            v3.length;
            return a11;
        }
        f13();
        f13(this);
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v21 = new F8(v7);
class C23 extends Uint8Array {
    static [v21](a25, a26, a27) {
    }
}
