function f0(a1, a2) {
    const v4 = Reflect.toString;
    try { new v4(); } catch (e) {}
    Reflect.construct(a2, a1).constructor();
    return f0;
}
const v8 = {};
function f9(a10, a11) {
    return [];
}
v8.get = f9;
function f14() {
}
const v15 = new Proxy(f14, v8);
for (let v16 = 0; v16 < 100; v16++) {
    f0([f0,f0,f0], v15);
}
