function f1() {
    function f2(a3, a4) {
        return 2.0;
    }
    Worker(f2, { type: 2.0 });
    return f1;
}
try { f1(); } catch (e) {}
