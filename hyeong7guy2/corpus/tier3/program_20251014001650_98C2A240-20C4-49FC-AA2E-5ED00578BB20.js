function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = a5.prototype;
    try { v7.toDateString(WeakSet); } catch (e) {}
}
new F2(WeakSet, Date);
