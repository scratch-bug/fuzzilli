function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        function f7() {
            gc();
            return gc;
        }
        const v10 = { construct: f7 };
        try { v10.construct(); } catch (e) {}
        v10.construct(a4);
    }
    const v14 = Symbol.toPrimitive;
    Symbol.for();
    this[v14] = f5;
}
const t15 = Array(1048576);
t15.length %= 168;
const v19 = new F1();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
