class C0 {
    constructor() {
        this.p = {};
    }
}
class C3 {
}
function f5() {
}
function f6() {
    const v7 = new C0();
    return v7;
}
const v9 = new Proxy(f5, { construct: f6 });
for (let i11 = 0; i11 < 20000; i11++) {
    Reflect.construct(v9, []);
}
C0 = C3;
