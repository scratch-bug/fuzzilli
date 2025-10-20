const v1 = new SharedArrayBuffer();
new DataView(v1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function F11() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = new F11();
            for (let i16 = 0; i16 != 20000; i16++) {
                function f22(a23, a24, a25) {
                    a24.d /= Math;
                    return this;
                }
                f22(F11, v13);
            }
        }
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v27 = new F4();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
