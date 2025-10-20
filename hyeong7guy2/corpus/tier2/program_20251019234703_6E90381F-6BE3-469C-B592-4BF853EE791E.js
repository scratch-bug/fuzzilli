const v0 = [];
function f2(a3) {
    a3 - a3;
    return f2;
}
const v5 = f2(536870888n);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            f11.prototype = f11;
            try { f11(f11); } catch (e) {}
            v0.forEach(v5);
            return 536870888n;
        }
        f11.call();
        f11(v0);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v17 = new F6();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
