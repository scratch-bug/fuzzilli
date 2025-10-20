const v7 = {
    construct(a3, a4) {
        a4[745] = a3;
        a4.concat(this, a4, a4, a4);
        return Reflect;
    },
};
function f9() {
    return v7;
}
const v10 = new Proxy(f9, v7);
const t11 = Array.prototype;
t11[502] = undefined;
Reflect.construct(v10, Uint8Array);
