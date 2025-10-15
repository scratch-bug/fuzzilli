function f0() {
    return f0;
}
new Worker(f0, { type: "function" });
for (let v5 = 0; v5 < 100; v5++) {
    const v7 = 2 ^ 2;
    const v8 = v7 >>> v7;
    v8 | v8;
    new Uint16Array();
}
