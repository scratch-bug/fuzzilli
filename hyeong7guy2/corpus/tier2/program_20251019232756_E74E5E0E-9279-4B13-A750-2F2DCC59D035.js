function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        function f6() {
            gc();
        }
        ({ construct: f6 }).construct();
    }
    this[Symbol.toPrimitive] = f4;
}
const v14 = Symbol.iterator;
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
const v22 = new WeakRef(F15);
const t15 = v22.constructor;
new t15(v14);
const v25 = new F0();
class C26 {
    static [v25](a28, a29, a30) {
    }
}
