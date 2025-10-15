function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2(a3, a4) {
    new C1();
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const t10 = Array(F6);
    t10[4] = f0;
    return F6;
}
for (let i13 = 0; i13 < 25000; i13++) {
    f2();
}
