const v0 = class {
}
const v8 = {
    construct(a4, a5) {
        Reflect.defineProperty(Array, 9, Reflect);
        return Reflect;
    },
};
v8.construct(v8, v0);
function f11() {
    return f11;
}
const v12 = new Proxy(f11, v8);
Reflect.enumerable = v0;
Reflect.construct(v12, v8);
