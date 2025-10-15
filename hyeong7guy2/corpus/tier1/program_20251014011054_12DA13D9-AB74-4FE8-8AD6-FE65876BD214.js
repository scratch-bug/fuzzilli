function f1() {
    return f1;
}
function f2() {
    const v3 = { a: 3462 };
    delete v3.a;
    return v3;
}
const v7 = new Proxy(f1, { construct: f2 });
const v8 = new v7();
v8.propertyIsEnumerable(v8);
