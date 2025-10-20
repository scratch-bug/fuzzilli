function f0() {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            try { this.f = this; } catch (e) {}
        }
        const v9 = {};
        function f10(a11, a12) {
            a11 instanceof f6;
        }
        v9.set = v9;
        const v15 = new Proxy(this, v9);
        try { v15.toString(f0); } catch (e) {}
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
v17.toString();
