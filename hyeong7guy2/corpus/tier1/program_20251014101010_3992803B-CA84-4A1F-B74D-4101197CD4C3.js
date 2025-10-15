const v8 = {
    construct(a3, a4) {
        a4[1667] = Symbol;
        a4.concat();
        return Reflect;
    },
};
function f10() {
    return f10;
}
const v11 = new Proxy(f10, v8);
const t11 = Array.prototype;
t11.length = 10;
Reflect.construct(v11, Uint8Array);
