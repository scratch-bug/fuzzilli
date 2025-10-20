function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.__defineGetter__(a2, F0);
    this.__lookupGetter__();
}
new F0();
