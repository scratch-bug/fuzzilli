with (d8) {
    function f1(a2) {
        return a2;
    }
    class C3 extends f1 {
    }
    const t6 = test.FastCAPI;
    const v6 = new t6();
    try { v6.compare_pointers(C3, test); } catch (e) {}
}
