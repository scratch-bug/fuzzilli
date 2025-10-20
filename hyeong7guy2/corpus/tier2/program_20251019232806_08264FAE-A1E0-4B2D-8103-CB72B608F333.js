function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        function f7() {
            gc();
            return gc;
        }
        const v10 = { construct: f7 };
        v10.construct(a4, v10, F1);
        return a3;
    }
    this[Symbol.toPrimitive] = f5;
}
const t13 = Array(1048576);
t13.length %= 168;
const v17 = new F1();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
