function f0(a1) {
    return a1;
}
const v7 = {
    construct(a3, a4) {
        return Reflect.setPrototypeOf(f0, f0);
    },
};
v7.construct(v7, v7);
