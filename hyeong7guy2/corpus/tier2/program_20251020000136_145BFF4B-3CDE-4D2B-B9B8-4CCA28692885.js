const v2 = new Int32Array();
const v4 = new Uint8ClampedArray(5.0);
v4.__proto__ = v2;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F9(a11, a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        function f15() {
            return a13;
        }
        function f16(a17) {
            v4.slice();
            return a17;
        }
        Object.defineProperty(this, "e", { get: f15, set: f16 });
    }
    const v19 = new F9(this, F9, v4, a7);
    v19.e = v19;
}
new F5(F5, v4);
