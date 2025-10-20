function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
for (let [i14, i15] = (() => {
        const v9 = new SharedArrayBuffer(10, { maxByteLength: 196 });
        const v11 = new Uint16Array(v9);
        const t2 = v11.constructor;
        new t2(v11);
        return [10, 10];
    })();
    i15;
    i15--) {
}
