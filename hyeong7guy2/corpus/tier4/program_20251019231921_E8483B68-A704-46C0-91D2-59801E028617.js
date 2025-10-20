function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new ArrayBuffer(65537, { maxByteLength: 1073741824 });
    const v11 = new Int16Array(v9);
    v11.fill(580);
}
new F1();
