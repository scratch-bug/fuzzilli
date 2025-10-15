function f0() {
    return f0;
}
const v1 = {};
for (let i3 = 0;
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i3 < 20000;
    })();
    i3++) {
    f0(v1);
}
