function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    new Date(0, 1);
}
new F0();
