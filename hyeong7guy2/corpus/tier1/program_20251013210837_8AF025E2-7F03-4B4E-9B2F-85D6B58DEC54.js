const v0 = class {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    v0.e = WeakMap;
}
new F2(v0, WeakMap);
