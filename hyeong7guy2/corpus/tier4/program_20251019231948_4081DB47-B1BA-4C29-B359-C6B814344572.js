function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = this.constructor;
        try { new v10(); } catch (e) {}
        let v13 = Object.bind();
        Int16Array instanceof v13;
    }
    new F4(F0, F4, a2, this);
}
new F0();
