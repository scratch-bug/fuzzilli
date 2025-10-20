function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 {
}
class C5 extends C4 {
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        try { new F12(a17, a17, 3691, 1); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            new C5();
            d = a14;
            a15 & a15;
        }
    }
    new F12();
}
new F6(F0, F6);
