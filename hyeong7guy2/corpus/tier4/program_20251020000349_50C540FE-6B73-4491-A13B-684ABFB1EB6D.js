function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = class {
    }
    let v5 = v4.length;
    v5--;
    const v11 = new ArrayBuffer(7, { maxByteLength: 13 });
    const v12 = new Int8Array(v11);
    v12.indexOf(v5);
}
new F1(F1);
