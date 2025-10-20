function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F1.constructor;
    t2();
}
function f8() {
    with (d8) {
        for (let v10 = 0; v10 < 5; v10++) {
            var b = 4096;
        }
    }
    return d8;
}
F1.constructor = f8;
new F1();
