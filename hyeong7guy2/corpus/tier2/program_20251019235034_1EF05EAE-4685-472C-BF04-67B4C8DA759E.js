const t0 = "🙌🏿";
t0[2] = "🙌🏿";
const v1 = /a\Sa(?:b)ta?/dsgvi;
class C2 {
    constructor() {
        v1.test(C2);
    }
}
function f6() {
    return Proxy;
}
function f7() {
    const v8 = new C2();
    return v8;
}
const v9 = { construct: f7 };
const v10 = new Proxy(f6, v9);
for (let i12 = 0; i12 < 20000; i12++) {
    Reflect.construct(v10, v9);
}
