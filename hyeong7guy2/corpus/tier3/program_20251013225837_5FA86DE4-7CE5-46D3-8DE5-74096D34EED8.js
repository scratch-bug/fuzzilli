function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor;
    const v6 = [a4,a4];
    function F7(a9) {
        if (!new.target) { throw 'must be called with new'; }
        try { this(this); } catch (e) {}
        this.c = v6;
    }
    new F7(F0);
}
new F0();
