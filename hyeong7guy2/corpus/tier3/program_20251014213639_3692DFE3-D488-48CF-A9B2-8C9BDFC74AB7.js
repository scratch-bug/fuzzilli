function f0() {
    return f0;
}
class C1 extends f0 {
}
WeakSet.p245 = C1;
WeakSet.p268 = "y";
for (let v4 = 0; v4 < 500; v4++) {
    const v6 = "p" + v4;
    WeakSet[v6] = v6;
}
class C7 extends WeakSet {
}
