function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i5 = 0; i5 < 10000; i5++) {
        const v11 = -i5;
        v11 >= v11;
    }
    try {
        new F0(this, this);
    } catch(e14) {
    }
}
new F0(F0, F0);
