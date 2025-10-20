function f1() {
    return f1;
}
class C2 extends f1 {
}
WeakSet.p331 = Array;
WeakSet.p245 = C2;
for (let v4 = 0; v4 < 250; v4++) {
    const v6 = "p" + v4;
    WeakSet[v6] = v6;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    class C11 extends WeakSet {
    }
}
new F7();
