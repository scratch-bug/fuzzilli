const v3 = new Map();
const v4 = v3.set();
function f5() {
    return v3;
}
const v12 = {
    construct(a7, a8) {
        const v11 = new Int8Array(1065172329);
        return v11;
    },
};
const v13 = v12.construct;
v13(v13, v13);
const v16 = { construct: f5 };
v16.construct().set(v4).set(0);
function f20() {
    return v12;
}
const v21 = new Proxy(f20, v16);
const v22 = new v21();
v22.set(v21).set(WeakMap);
