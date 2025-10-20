function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        function f7() {
            gc();
        }
        const v10 = { construct: f7 };
        v10.construct(a4, v10, F1);
    }
    this[Symbol.toPrimitive] = f5;
}
const t11 = Array(1048576);
t11.length %= 168;
const v17 = new F1();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
