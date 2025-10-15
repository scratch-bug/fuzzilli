class C0 {
}
function f2() {
    return f2;
}
const v4 = new Proxy(f2, {});
for (let i6 = 0; i6 < 20000; ++i6) {
    Reflect.construct(v4, [Reflect,Reflect,Reflect,Reflect], C0, i6, Reflect);
}
