const v6 = {
    construct(a1, a2) {
        a2[1371] = a1;
        a2.fill();
        a2[2591] = a2;
        a2.concat(this);
        return Reflect;
    },
};
function f8() {
    return v6;
}
const v9 = new Proxy(f8, v6);
Reflect.construct(v9, v6);
