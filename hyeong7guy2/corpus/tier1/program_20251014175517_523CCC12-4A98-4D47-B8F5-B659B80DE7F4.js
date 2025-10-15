class C0 {
}
class C1 extends C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        try { new F8(a13, a13, 3691, 1); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            try {
                new C1();
            } catch(e16) {
            }
            d = a10;
        }
    }
    new F8(3691, F8, F8, 3691);
}
new F2();
