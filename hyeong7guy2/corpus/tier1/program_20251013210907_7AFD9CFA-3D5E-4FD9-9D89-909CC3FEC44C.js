function f0(a1, a2) {
    a1[0];
    Reflect.construct(a2, [a1]);
    return a1[0] + 1;
}
const v17 = {
    construct(a11, a12) {
        const t0 = a12[0];
        t0[0] = 1.1;
        return Reflect.construct(a11, a12, a11);
    },
};
const handler = v17;
function f20() {
}
const v21 = new Proxy(f20, handler);
const proxy = v21;
for (let i24 = 0; i24 < 25000; i24++) {
    f0([1,2], proxy);
}
f0([1,2], proxy);
