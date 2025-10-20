let v0 = 536870912;
function f1(a2) {
    const v7 = ([1])[0] === 1;
    if (v7) {
        Reflect.construct(a2, [v7]);
        function f11() {
            return f11;
        }
        return f11;
    }
    return 1;
}
function f12() {
    return v0;
}
const v15 = new Proxy(f12, {});
for (let i17 = (() => {
        v0 = 0;
        return 0;
    })();
    i17 < 25000;
    i17++) {
    f1(f12);
}
f1(v15);
