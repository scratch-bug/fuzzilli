const v0 = class {
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    return v0;
}
f7[512] = F1;
class C8 extends f7 {
}
C8[512] = v0;
