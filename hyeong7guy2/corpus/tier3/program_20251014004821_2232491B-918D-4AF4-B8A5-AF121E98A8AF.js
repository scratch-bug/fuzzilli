function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(); } catch (e) {}
    a10--;
    const v15 = a10.constructor;
    try { v15(4); } catch (e) {}
    let v17;
    try { v17 = v15(this, this, a11, a8); } catch (e) {}
    v17 ?? v17;
}
new F6(Float32Array, true, 1102284067n);
