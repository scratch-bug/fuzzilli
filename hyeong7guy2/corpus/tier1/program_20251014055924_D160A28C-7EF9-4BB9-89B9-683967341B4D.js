const v2 = class extends Array {
}
function f3() {
    return f3;
}
function f4() {
    const v5 = { a: v2 };
    delete v5.a;
    return v5;
}
const v9 = new Proxy(f3, { construct: f4 });
const v10 = new v9();
v10.h = v10;
v10.e = 128;
v10.b = v10;
