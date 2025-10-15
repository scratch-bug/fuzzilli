function f0(a1) {
    let v2 = 0;
    const v5 = 2 ** 32;
    const v8 = new Uint8Array(8);
    for (let v9 = 0; v9 < 5; v9++) {
        if (a1) {
            v2 = v5;
        }
        v8[v2] = 1;
    }
    return v5;
}
for (let i12 = 0; i12 < 25000; i12++) {
    f0();
}
f0(true);
