function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    a2.prototype = Symbol.iterator;
    a2.prototype;
}
new F0(F0);
