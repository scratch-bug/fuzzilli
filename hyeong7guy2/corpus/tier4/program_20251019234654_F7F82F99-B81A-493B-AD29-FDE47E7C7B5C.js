function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Float32Array(1000);
    v5.indexOf(-0.0);
}
new F0();
