class C0 {
}
function f1(a2) {
}
f1.length = f1;
function f4(a5, a6) {
    try { new a6(); } catch (e) {}
    Reflect.construct(a6, a5);
    const v10 = a5[0];
    v10 >>> v10;
}
const v20 = {
    construct(a13, a14) {
        a13.constructor;
        const v17 = a14[0];
        v17[0] = 1.1;
        Reflect.getOwnPropertyDescriptor(Reflect, v17);
        return Reflect;
    },
};
try { v20.construct(); } catch (e) {}
function f23() {
}
const v24 = new Proxy(f23, v20);
for (let v25 = 0; v25 < 100; v25++) {
    for (let v26 = 0; v26 < 10; v26++) {
        "p" + v26;
    }
    f4([1], v24);
}
