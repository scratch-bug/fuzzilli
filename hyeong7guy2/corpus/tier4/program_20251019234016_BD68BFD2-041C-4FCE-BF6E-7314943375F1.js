function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v5 = (2).length;
    v5--;
    const v11 = new ArrayBuffer(7, { maxByteLength: 13 });
    const v12 = new Int8Array(v11);
    v12.indexOf(v5);
}
new F2(Int8Array);
