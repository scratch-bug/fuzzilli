const v5 = {
    construct(a1, a2) {
        a2.concat();
        return Reflect;
    },
};
function f7() {
    return f7;
}
const v8 = new Proxy(f7, v5);
const v10 = Array.prototype;
Object.defineProperty(v10, 1612, { configurable: true, value: v10 });
v10.length = 1;
Reflect.construct(v8, v8);
