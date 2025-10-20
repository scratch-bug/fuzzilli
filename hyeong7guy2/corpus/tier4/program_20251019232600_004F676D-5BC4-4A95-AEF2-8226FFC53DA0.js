const v2 = new Int16Array(8);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = new ArrayBuffer(165, { maxByteLength: 1024 });
    const v15 = new Uint16Array(v13);
    v15.set(v2);
}
new F3();
