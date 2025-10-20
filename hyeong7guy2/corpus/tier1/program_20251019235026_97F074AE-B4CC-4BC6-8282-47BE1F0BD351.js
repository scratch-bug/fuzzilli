function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = this.constructor;
        try { new v4(); } catch (e) {}
        const v7 = { a: 1 };
        const v9 = { a: 1.1 };
    }
    new F2();
}
new F0();
new F0();
