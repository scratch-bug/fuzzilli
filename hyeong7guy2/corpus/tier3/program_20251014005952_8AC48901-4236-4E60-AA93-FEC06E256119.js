Symbol.iterator;
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    gc();
    function f10() {
        class C11 {
            static {
            }
        }
    }
    for (let v13 = 0; v13 < 100; v13++) {
        f10.call();
    }
}
new F2();
new F2();
