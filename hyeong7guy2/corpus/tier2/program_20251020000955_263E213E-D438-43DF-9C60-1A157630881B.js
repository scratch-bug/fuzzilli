function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        const v5 = new ArrayBuffer(v1, { maxByteLength: 1073741824 });
        const v7 = new Int16Array(v5);
        v7.includes(1073741824);
    }
    return f0;
}
const v9 = { next: f0 };
v9.next(f0, v9, v9, v9);
