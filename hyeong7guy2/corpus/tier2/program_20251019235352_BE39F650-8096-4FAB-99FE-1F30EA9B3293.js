const v1 = class extends Array {
}
function f2() {
    return f2;
}
function f3() {
    const v4 = { a: v1 };
    delete v4.a;
    return v4;
}
const v8 = new Proxy(f2, { construct: f3 });
const v9 = new v8();
v9.c = v9;
v9.e = v9;
v9.b = v9;
