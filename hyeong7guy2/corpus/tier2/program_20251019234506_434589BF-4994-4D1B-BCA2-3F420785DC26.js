function f0() {
    return f0;
}
class C1 extends f0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v10 = typeof (C1 > f7);
            try { v10.lastIndexOf(this); } catch (e) {}
            return a4;
        }
        f7(C1);
        f7();
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v14 = new F2();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
