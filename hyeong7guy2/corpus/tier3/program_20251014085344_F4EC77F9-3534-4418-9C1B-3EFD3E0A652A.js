function f0() {
    function f2() {
        return f0;
    }
    const t4 = f2.constructor;
    t4("🙌🏿");
    return f0;
}
try { f0(); } catch (e) {}
