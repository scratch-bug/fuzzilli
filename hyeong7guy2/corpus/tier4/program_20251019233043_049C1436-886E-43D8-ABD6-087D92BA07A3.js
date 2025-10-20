function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return a3;
    }
    class C5 {
        m(a7, a8, a9, a10) {
            try { this.o(f4, f4); } catch (e) {}
        }
    }
    const v15 = new Int8Array(127);
    v15.join(C5).replace(Proxy);
}
new F0();
