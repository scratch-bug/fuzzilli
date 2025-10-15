function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(this, a2, F0); } catch (e) {}
    for (let v8 = 0; v8 < 5; v8++) {
        ++Math;
        v8 >> v8;
    }
}
new F0();
