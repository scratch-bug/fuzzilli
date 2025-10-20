function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const v15 = new ArrayBuffer(165, { maxByteLength: 1024 });
        const v17 = new Uint16Array(v15);
        v17[28] = a8;
    }
    new F5(F5, 2147483649);
}
new F1(2147483649, F1);
