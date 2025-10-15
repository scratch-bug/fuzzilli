const v1 = {};
function f2() {
    const v5 = new Proxy(Float64Array, {});
    return v5;
}
v1.get = f2;
function f7() {
    return f2;
}
const v8 = new Proxy(f7, v1);
for (let v9 = 0; v9 < 10; v9++) {
    Reflect.construct(v8, [f2,f2,f2,f2,f2]);
}
