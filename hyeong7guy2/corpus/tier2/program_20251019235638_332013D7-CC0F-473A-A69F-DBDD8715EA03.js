const v5 = {
    construct(a2, a3) {
        Date.__proto__ = a3;
        a3[0] = 1.1;
        return a3;
    },
};
function f7() {
    return Proxy;
}
const v8 = new Proxy(f7, v5);
const v9 = [Date];
new v8();
Reflect.construct(v8, v9);
