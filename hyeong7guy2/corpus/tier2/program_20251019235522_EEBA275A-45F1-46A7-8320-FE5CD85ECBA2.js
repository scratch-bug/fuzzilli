function f0() {
    return f0;
}
class C1 extends f0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            typeof (C1 > f7) === "object";
        }
        f7(a5);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v15 = new F2(f0, C1);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
