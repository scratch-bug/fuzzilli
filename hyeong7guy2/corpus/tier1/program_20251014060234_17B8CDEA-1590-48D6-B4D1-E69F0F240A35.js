const v6 = {
    construct(a1, a2) {
        a2[1667] = Symbol;
        a2[2591] = a2;
        a2.concat();
        return Reflect;
    },
};
function f8() {
    return Proxy;
}
const v9 = new Proxy(f8, v6);
Reflect.construct(v9, [1]);
