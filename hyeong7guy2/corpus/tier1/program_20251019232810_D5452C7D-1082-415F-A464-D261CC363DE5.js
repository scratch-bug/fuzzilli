class C0 {
}
const v1 = new C0();
const v2 = new C0();
const v3 = [225.4703035938428,1000000000000.0,1e-15,1000000000000.0,-2.2250738585072014e-308,1.7976931348623157e+308,-4.207154078002535,0.3921877479307916,2.835084157167362,NaN];
const v5 = /lT(x)(x)(x)\1/dusygi;
const v6 = /\b/duygi;
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this.constructor;
    try { new v13(v3, 64077, a9, a12); } catch (e) {}
    const v15 = a9?.constructor;
    try { new v15(C0, a11); } catch (e) {}
    a10.constructor;
    const t13 = a12?.constructor;
    new t13();
}
new F7(v6, v1, v2, v2);
new F7(v5, v2, v2, v1);
let v22 = /q\p{Nd}/svi;
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    function f27() {
        function f28(a29) {
            v22--;
            return a29;
        }
        f28(a26);
        f28();
        %OptimizeMaglevOnNextCall(f28);
        return f28;
    }
    Object.defineProperty(this, "toString", { get: f27 });
}
const v33 = new F23();
v33.toString(F7);
class C35 {
    static [v33](a37, a38, a39) {
    }
}
