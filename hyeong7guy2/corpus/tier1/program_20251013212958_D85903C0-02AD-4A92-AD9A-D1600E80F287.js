class C0 {
}
for (let v1 = 0; v1 < 5; v1++) {
    C0["p" + v1] = v1;
}
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F5();
new Float32Array();
function f14() {
    return F5;
}
class C16 {
}
const v17 = {};
function f18(a19, a20) {
    a19.toISOString = a20;
}
for (let i22 = 0; i22 < 20000; i22++) {
    const v30 = i22 % 2 ? 2 : v17;
    const v34 = {
        m(a32, a33) {
            v30.__proto__ = v30;
            return this;
        },
        d: v10,
    };
    f18(v30, v34, 0, C16);
}
let victim = {};
class C38 extends f14 {
    static [Float32Array] = "78kBW";
}
