class C1 extends Uint16Array {
}
const v2 = new C1();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = {
    construct(a8, a9) {
        function f10() {
            function f11(a12) {
                return F3;
            }
            return f11;
        }
        function f13(a14) {
            return a14;
        }
        Object.defineProperty(a8, Symbol.toPrimitive, { configurable: true, get: f10, set: f13 });
        return a9.fill(this, F3, a8);
    },
};
try { v18.construct(v2, v2); } catch (e) {}
