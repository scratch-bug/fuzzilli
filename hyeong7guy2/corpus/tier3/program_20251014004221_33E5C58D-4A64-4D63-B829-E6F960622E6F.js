function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    function f5(a6, a7) {
        return this;
    }
    for (let v8 = 0; v8 < 5; v8++) {
        const v9 = v8 & v8;
        v9 + v9;
        f5();
    }
}
new F0(F0);
