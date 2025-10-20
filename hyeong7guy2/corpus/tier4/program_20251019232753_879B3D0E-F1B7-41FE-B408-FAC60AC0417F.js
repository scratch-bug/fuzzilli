function F1() {
    if (!new.target) { throw 'must be called with new'; }
    Math.atan2(-Infinity, Infinity);
}
new F1();
