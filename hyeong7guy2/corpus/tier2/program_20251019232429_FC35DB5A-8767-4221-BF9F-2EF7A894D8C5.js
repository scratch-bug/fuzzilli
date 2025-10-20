function f1() {
    for (let v2 = 0; v2 < 5; v2++) {
        const v6 = new ArrayBuffer(v2, { maxByteLength: 1073741824 });
        const v8 = new Int16Array(v6);
        v8.fill(580);
    }
    return f1;
}
const v10 = { next: f1 };
v10.next(v10, f1, v10);
