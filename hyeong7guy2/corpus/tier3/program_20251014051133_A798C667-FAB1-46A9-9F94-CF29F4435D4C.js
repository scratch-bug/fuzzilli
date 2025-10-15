function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        return { ...this };
    }
    for (let v5 = 0; v5 < 10; v5++) {
        new f2();
    }
}
new F0();
