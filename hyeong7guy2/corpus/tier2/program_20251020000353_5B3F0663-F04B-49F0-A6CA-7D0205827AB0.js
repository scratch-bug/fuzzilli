("🙌🏿").split("🙌🏿", "🙌🏿");
const v8 = {
    construct(a3, a4) {
        a4[2550] = a3;
        Reflect.getOwnPropertyDescriptor(Reflect, a4.fill(a3));
        return Reflect;
    },
};
function f10() {
    return v8;
}
const v11 = new Proxy(f10, v8);
Reflect.construct(v11, v8);
