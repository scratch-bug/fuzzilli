function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
}
("🙌🏿").fixed(F0, F0, "🙌🏿");
Reflect.deleteProperty(F0, F0);
