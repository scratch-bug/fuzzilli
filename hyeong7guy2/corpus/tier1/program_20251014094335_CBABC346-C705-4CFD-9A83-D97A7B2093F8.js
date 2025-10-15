for (let v0 = 0; v0 < 5; v0++) {
    v0 > v0;
}
const v6 = {
    construct(a3, a4) {
        Reflect.b = Reflect;
        return Reflect;
    },
};
function f8() {
}
const v9 = new Proxy(f8, v6);
v9.prototype = v9;
for (let v10 = 0; v10 < 50; v10++) {
    Reflect.construct(v9, []);
}
