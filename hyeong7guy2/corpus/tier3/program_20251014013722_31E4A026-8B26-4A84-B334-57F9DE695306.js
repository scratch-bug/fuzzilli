function F0() {
    if (!new.target) { throw 'must be called with new'; }
    new constructor();
}
new F0();
new F0();
