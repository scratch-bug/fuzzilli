const v0 = class {
}
function f1() {
    return 23437n;
}
v0.valueOf = f1;
class C3 {
}
function f4(a5) {
    return a5 ** a5;
}
C3.constructor = f4;
const t12 = C3.constructor;
t12(v0);
