const v1 = new Int16Array();
const v4 = new Uint8ClampedArray(1471);
v4.__proto__ = v1;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16() {
            return a8;
        }
        function f17(a18) {
            v4.slice(a18, 1471);
            return -1;
        }
        Object.defineProperty(this, "e", { get: f16, set: f17 });
        this.e = -1;
    }
    new F10(1471, -1, 1471, v4);
}
new F5();
