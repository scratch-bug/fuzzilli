function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        F0(this, this);
    } catch(e5) {
        const v7 = new Date(e5);
        v7.setUTCMilliseconds(e5);
    }
}
new F0(F0, F0);
