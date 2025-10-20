const v2 = new ArrayBuffer();
let v3;
try { v3 = v2.slice(2147483647n); } catch (e) {}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            return ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").toString();
        }
        f9(f9);
        f9(ArrayBuffer);
        %OptimizeFunctionOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v15 = new F4(v2, v3);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
