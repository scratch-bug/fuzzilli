function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4) {
        try { a4(5); } catch (e) {}
        const v6 = { ...this };
        try { v6.readbuffer(a4); } catch (e) {}
        return F1;
    }
    f3(f3);
}
new F1();
