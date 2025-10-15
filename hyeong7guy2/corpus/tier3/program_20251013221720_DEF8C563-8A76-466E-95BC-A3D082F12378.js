function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
gc(F0, Symbol.iterator);
