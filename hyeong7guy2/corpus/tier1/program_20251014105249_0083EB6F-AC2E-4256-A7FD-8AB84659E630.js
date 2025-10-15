function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F1();
function F6() {
    if (!new.target) { throw 'must be called with new'; }
    function F8() {
        if (!new.target) { throw 'must be called with new'; }
        try { this(); } catch (e) {}
        eval();
        for (let v14 = 0; v14 < 500; v14++) {
            v14 < 10000;
            ++v14;
        }
    }
    new F8();
}
new F6();
