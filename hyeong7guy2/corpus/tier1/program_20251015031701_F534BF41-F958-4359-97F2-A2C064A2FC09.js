const v0 = class {
}
const v11 = {
    construct(a4, a5) {
        function f7() {
            return Array;
        }
        function f8(a9) {
            return f8;
        }
        Object.defineProperty(Reflect, "configurable", { configurable: true, enumerable: true, get: f7, set: f8 });
        Reflect.defineProperty(Array, 9, Reflect);
        return Reflect;
    },
};
v11.construct(Array, Array);
function f14() {
    return Proxy;
}
const v15 = new Proxy(f14, v11);
Reflect.enumerable = v0;
Reflect.construct(v15, v11);
