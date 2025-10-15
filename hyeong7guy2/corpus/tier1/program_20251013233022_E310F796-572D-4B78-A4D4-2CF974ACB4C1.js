const v5 = {
    construct(a1, a2) {
        a2.concat(a2);
        return Reflect;
    },
};
function f7() {
    return Proxy;
}
const v8 = new Proxy(f7, v5);
Reflect.construct(v8, [1]);
