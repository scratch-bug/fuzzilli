const v0 = [0.0,-5.0,-1e-15,-651444.7695244057,1.5857248930509024e+308,-38327.7975071643,-8.135749465211018e+307,3.083921013302577,706.8190728593218];
function f1() {
    return v0;
}
class C2 extends f1 {
}
const v3 = new C2();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
function f6(a7, a8) {
    const v10 = Intl.NumberFormat;
    try { v10.supportedLocalesOf(v3); } catch (e) {}
    return a8;
}
F4.constructor = f6;
const v12 = F4.constructor;
v12(v12, v3, v12, v3, v3);
