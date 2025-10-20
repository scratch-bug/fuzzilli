class C0 {
}
function f2(a3, a4, a5) {
    this.toString = f2;
    function f7(a8) {
        return C0;
    }
    const v10 = /(ab|cde)\1/gv;
    function F11(a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        a13.replace(v10, a14);
    }
    const v17 = new F11("NFKC", f2);
    Object.defineProperty(Float32Array, this, { set: f7 });
    return v17;
}
const v18 = {};
v18.constructor = f2;
try { v18.constructor(); } catch (e) {}
