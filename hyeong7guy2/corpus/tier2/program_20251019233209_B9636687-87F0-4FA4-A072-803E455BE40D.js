const v6 = {
    construct(a1, a2) {
        a2[2550] = a1;
        a2.fill(a1, a2);
        a2.concat(this);
        return Reflect;
    },
};
function f8() {
    return Proxy;
}
const v9 = new Proxy(f8, v6);
Reflect.construct(v9, v6);
