function F0() {
    if (!new.target) { throw 'must be called with new'; }
    Math.tanh(-this);
}
new F0();
