const v1 = new Float64Array();
const v2 = v1[9];
function f3() {
    return v1;
}
class C4 extends f3 {
}
const v5 = new C4();
function f6(a7) {
    v1[256] = v2;
    return v5;
}
v5.valueOf = f6;
const v8 = new C4();
v8[1] = v8;
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = this.constructor;
    try { new v15(v8, a13, v8, a13); } catch (e) {}
    function f17() {
    }
    a14.toString = f17;
    a11[2] = a11;
}
new F9(C4, C4, C4, C4);
