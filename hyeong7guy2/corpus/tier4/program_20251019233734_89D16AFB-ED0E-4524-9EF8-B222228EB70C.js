const v1 = Intl.RelativeTimeFormat;
const v3 = {};
function f4(a5, a6) {
    new v1("gu", { numberingSystem: "arabext" });
    return a6;
}
v3.get = f4;
function f11() {
    return Proxy;
}
const v12 = new Proxy(f11, v3);
Reflect.construct(v12, v12);
