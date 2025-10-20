class C0 {
}
function f1() {
    function f2(a3, a4) {
        with (d8) {
            ({"h":a4,} = C0);
        }
        return a4;
    }
    f2();
    return C0;
}
({ construct: f1 }).construct();
