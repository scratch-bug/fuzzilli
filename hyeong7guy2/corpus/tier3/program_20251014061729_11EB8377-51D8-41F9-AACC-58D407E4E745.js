function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
Object.seal(F0);
