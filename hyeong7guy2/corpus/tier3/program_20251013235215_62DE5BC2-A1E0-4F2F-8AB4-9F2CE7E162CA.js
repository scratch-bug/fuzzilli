function f2(a3) {
    const v5 = a3[1];
    const v8 = new Proxy(Uint8Array, {});
    v8[128];
    return Array(v5);
}
const v11 = {};
for (let i13 = 0; i13 < 20000; i13++) {
    v11[1] = 2;
    f2(v11);
}
