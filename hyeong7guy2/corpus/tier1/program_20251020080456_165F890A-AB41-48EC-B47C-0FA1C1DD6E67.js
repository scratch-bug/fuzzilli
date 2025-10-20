function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        function f8() {
            return gc();
        }
        ({ construct: f8 }).construct();
    }
    this[Symbol.toPrimitive] = f6;
}
const v15 = new F2();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
