const v5 = {
    construct(a1, a2) {
        a2[2591] = a2;
        a2.concat(a2, this);
        return Reflect;
    },
};
function f7() {
    return f7;
}
const v8 = new Proxy(f7, v5);
Reflect.construct(v8, [1]);
