function f0() {
    return f0;
}
class C1 extends f0 {
}
WeakSet.p245 = C1;
for (let v3 = 0; v3 < 500; v3++) {
    const v5 = "p" + v3;
    WeakSet[v5] = v5;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    class C10 extends WeakSet {
    }
}
new F6(C1, WeakSet);
