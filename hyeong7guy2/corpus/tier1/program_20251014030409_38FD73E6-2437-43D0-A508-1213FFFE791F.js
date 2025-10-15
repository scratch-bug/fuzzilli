function f1(a2, a3) {
    a2[0];
    Reflect.construct(a3, [a2]);
}
const v13 = {
    construct(a9, a10) {
        const t0 = a10[0];
        t0[0] = 1.1;
        return a9;
    },
};
try {
    f1(WeakSet);
} catch(e16) {
}
function f17() {
}
const v18 = new Proxy(f17, v13);
for (let i20 = 0; i20 < 25000; i20++) {
    f1([], v18);
}
