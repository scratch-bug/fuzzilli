class C1 extends Uint32Array {
}
const v2 = new C1();
const v8 = {
    construct(a4, a5) {
        try { Reflect.construct(v2); } catch (e) {}
        return a5;
    },
};
function f10() {
    return v8;
}
const v11 = new Proxy(f10, v8);
Reflect.construct(v11, Proxy);
