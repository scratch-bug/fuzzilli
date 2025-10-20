const v2 = new Uint8ClampedArray(129);
const v5 = new Int16Array(512);
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
            const v16 = t11();
            const v17 = v2.length;
            v17 | v17;
            v16[1];
        }
        f13(a10);
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v22 = new F8(v7);
class C24 extends Uint8Array {
    static [v22](a26, a27, a28) {
    }
}
