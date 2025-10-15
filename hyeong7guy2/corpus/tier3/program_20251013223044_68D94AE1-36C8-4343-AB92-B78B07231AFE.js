function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.call;
}
F0.prototype = F0;
F0.g = F0;
new F0(F0, F0);
