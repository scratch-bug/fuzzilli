function F0() {
    if (!new.target) { throw 'must be called with new'; }
    try {
        Array(-339025740);
    } catch(e5) {
        e5.stack;
    }
}
F0.prototype = F0;
new F0();
