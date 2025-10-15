function F0() {
    if (!new.target) { throw 'must be called with new'; }
    Object.__proto__ = this;
}
new F0();
new F0();
