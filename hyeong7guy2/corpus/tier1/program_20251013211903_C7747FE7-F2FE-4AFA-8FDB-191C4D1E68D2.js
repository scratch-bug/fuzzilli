let v0 = undefined;
function f1(a2) {
    const v4 = [1];
    v0 = v4;
    const v7 = v4[0] === 1;
    if (v7) {
        Reflect.construct(a2, [v7]);
        v4[1] = 2;
    }
}
function f12() {
}
const v14 = () => {
    v0[0] = 1.1;
    return {};
};
const v18 = new Proxy(f12, { construct: v14 });
for (let i20 = 0; i20 < 25000; i20++) {
    f1(f12);
}
f1(v18);
