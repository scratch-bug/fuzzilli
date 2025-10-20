function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        const v5 = new ArrayBuffer(v1, { maxByteLength: 1073741824 });
        const v7 = new Int16Array(v5);
        v7.lastIndexOf(1073741824);
    }
    return f0;
}
({ next: f0 }).next();
