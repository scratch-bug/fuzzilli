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
            const v15 = v7.constructor;
            v15(a14, v15, v15, f12, a11)[22];
            const v18 = v3.length;
            v18 << v18;
            return v3;
        }
        f13(f13());
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v22 = new F8(v7);
v22.toString();
