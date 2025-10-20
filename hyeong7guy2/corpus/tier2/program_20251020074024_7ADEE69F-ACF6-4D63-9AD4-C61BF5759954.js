function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        function f6() {
            gc();
            return a5;
        }
        ({ construct: f6 }).construct();
        return a2;
    }
    this[Symbol.toPrimitive] = f4;
}
const v13 = new F0();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
