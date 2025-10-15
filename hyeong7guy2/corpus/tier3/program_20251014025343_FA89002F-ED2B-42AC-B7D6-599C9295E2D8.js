function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        new Array(a7, f6);
    }
    for (let i11 = 1; i11 < 20000; i11++) {
        f6();
    }
}
new F0();
new F0();
