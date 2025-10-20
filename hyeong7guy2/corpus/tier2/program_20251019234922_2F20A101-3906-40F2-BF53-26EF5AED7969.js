("setUTCFullYear").normalize();
const v5 = new Int32Array(128);
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            v5[9] += -256;
        }
        f12.call();
        f12.call();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v16 = new F7();
v16.toString();
