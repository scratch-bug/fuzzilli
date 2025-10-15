class C0 {
}
class C1 extends C0 {
}
function f2() {
    return C0;
}
let v4;
try { v4 = Float32Array(); } catch (e) {}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i8 = 0;
    (() => {
        new f2(i8, C0, C1, ...[-1.1556410424107278e+308]);
        return i8 < 10000;
    })();
    i8++) {
    F5[9] >>= v4;
}
