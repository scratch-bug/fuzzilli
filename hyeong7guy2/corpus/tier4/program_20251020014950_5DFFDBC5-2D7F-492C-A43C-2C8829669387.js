function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        const v8 = new ArrayBuffer(v4, { maxByteLength: 1073741824 });
        v8.resize();
    }
}
new F0(F0, F0);
