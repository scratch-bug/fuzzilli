const v1 = class {
    #c = BigInt64Array;
}
new v1();
function f4(a5, a6) {
    a5[0];
    Reflect.construct(a6, [a5]);
    return a5;
}
const v16 = {
    construct(a12, a13) {
        const t0 = a13[0];
        t0[0] = 1.1;
        return a12;
    },
};
try {
    f4(WeakSet);
} catch(e19) {
}
function f20() {
}
const v21 = new Proxy(f20, v16);
for (let i23 = 0; i23 < 25000; i23++) {
    f4([], v21);
}
for (let v31 = 0; v31 < 5; v31++) {
}
