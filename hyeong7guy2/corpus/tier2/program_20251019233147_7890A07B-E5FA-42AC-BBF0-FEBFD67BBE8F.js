const v2 = new Float32Array(5.0, 5.0);
const v4 = new Uint8ClampedArray(5.0);
v4.__proto__ = v2;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16() {
            return a13;
        }
        function f17(a18) {
            v4.slice();
            return a14;
        }
        Object.defineProperty(this, "e", { get: f16, set: f17 });
        this.e = -1;
    }
    new F10();
}
new F5();
