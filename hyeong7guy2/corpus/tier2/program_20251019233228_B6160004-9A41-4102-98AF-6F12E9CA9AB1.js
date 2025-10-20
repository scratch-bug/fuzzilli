class C1 extends Int16Array {
}
const v2 = new C1();
const v6 = {
    construct(a4, a5) {
        a5[1] = a5;
        return a5;
    },
};
v6.construct(C1, v2);
function f9() {
    return v2;
}
const v10 = new Proxy(f9, v6);
Reflect.construct(v10, []);
