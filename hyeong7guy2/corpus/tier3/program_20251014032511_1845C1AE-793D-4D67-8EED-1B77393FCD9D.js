function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    let v1 = this;
    v1--;
    const t3 = v1.constructor;
    t3().toExponential();
}
new F0();
