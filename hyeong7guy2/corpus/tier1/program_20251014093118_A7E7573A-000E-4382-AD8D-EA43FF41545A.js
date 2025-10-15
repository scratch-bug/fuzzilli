const v5 = {
    construct(a1, a2) {
        a2[2591] = a2;
        Reflect.construct(a1, a2);
        return Reflect;
    },
};
function f7() {
    return v5;
}
const v8 = new Proxy(f7, v5);
Reflect.construct(v8, [v8,v8,v8,v8,v8]);
