function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new ArrayBuffer(7);
    v5.slice(a2, 7);
}
new F0(F0);
