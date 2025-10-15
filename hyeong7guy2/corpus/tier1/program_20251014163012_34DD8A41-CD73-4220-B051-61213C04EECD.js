function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        const v4 = { ...this };
        try { v4.readbuffer(a3); } catch (e) {}
        return a3;
    }
    f2(f2);
}
new F0();
