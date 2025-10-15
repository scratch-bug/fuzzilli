function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6;
    try { v6 = new a4(); } catch (e) {}
    v6.keys();
    try {
        new F2(a4);
    } catch(e9) {
    }
}
new F2(Map, 38107n);
