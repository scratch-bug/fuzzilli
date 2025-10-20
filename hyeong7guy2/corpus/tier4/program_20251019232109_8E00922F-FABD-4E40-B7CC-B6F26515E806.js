class C0 {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        return a5;
    }
    a4[Symbol.toPrimitive] = f7;
}
new F2(Date, C0);
const v12 = [0.3355499447371395];
class C13 extends Date {
}
const v14 = C13.UTC;
try { v14(v12, Date); } catch (e) {}
