function f0() {
    return f0;
}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = {};
    v4[2] = f0;
    for (let i5 = 242; i5 < 25000; i5++) {
        v4[2] >>>= 2;
    }
}
new F2();
