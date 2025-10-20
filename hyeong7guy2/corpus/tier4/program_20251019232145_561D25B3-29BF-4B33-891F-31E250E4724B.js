function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new SharedArrayBuffer(10, { maxByteLength: 268435439 });
    const v10 = new Float64Array(v8);
    v10.indexOf(3);
}
new F1();
