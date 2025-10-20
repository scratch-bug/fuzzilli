const t0 = (129).constructor;
const v3 = new t0();
v3.valueOf = Symbol;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        try { JSON.stringify(JSON, F4, a6); } catch (e) {}
        for (let i13 = 0, i14 = 10; i14; i14--) {
        }
        function f20(a21) {
            return a21;
        }
        return f20;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v22 = new F4(v3);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
for (let i30 = 0, i31 = 10; i31; i31--) {
}
