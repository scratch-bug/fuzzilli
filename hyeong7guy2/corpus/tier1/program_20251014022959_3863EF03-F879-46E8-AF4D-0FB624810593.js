class C0 {
}
new C0();
const v2 = class extends C0 {
}
new v2();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7(a8, a9) {
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F10();
    Reflect.construct(a9, a8);
}
const v25 = {
    construct(a20, a21) {
        a21 % a21;
        return Reflect.construct(a20, a21);
    },
};
function f27() {
}
const v28 = new Proxy(f27, v25);
new v28();
for (let v30 = 0; v30 < 100; v30++) {
    f7([1,2], v28);
}
