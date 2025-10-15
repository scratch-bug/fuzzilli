function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Object.prototype;
    const v6 = v4.constructor.freeze(v4);
    try { v6.__defineGetter__(a2, Object); } catch (e) {}
}
new F0(F0);
