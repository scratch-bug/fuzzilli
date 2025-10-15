const v3 = new Proxy(Symbol, { get: Symbol });
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = Promise.prototype.finally;
    try { v9.apply(v3); } catch (e) {}
}
new F4(Symbol);
