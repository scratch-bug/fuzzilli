const v0 = /a\Sa(?:b)ta?/ivgsd;
class C1 {
    constructor() {
        v0.test(C1);
    }
}
function f5() {
    return f5;
}
function f6() {
    const v7 = new C1();
    return v7;
}
const v8 = { construct: f6 };
const v9 = new Proxy(f5, v8);
for (let i11 = 0; i11 < 20000; i11++) {
    Reflect.construct(v9, [v8,v8]);
}
