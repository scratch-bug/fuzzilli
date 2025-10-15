class C1 {
    h = -14249;
}
for (let v2 = 0; v2 < 100; v2++) {
    class C3 extends C1 {
    }
    new C3();
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        for (const v7 in this) {
        }
    }
    new F5();
}
