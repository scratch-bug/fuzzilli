const v1 = new Float64Array();
const v2 = v1[9];
function f3() {
    return v1;
}
class C4 extends f3 {
}
const v5 = new C4();
const v6 = new C4();
function f7(a8) {
    v1[256] = v2;
    return a8;
}
v6.valueOf = f7;
const v9 = new C4();
const v10 = new C4();
v10[1] = v10;
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17() {
        return F11;
    }
    a16.toString = f17;
    a13[2] = a13;
}
new F11(v9, v5, v9, v5);
