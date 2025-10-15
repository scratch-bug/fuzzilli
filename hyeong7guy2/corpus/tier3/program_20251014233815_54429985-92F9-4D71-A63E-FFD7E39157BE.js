for (let i2 = 0, i3 = 10; i3;) {
    i3--;
}
function f9() {
    return f9;
}
class C10 extends f9 {
}
WeakSet.p245 = C10;
for (let v12 = 0; v12 < 500; v12++) {
    const v14 = "-9007199254740990" + v12;
    WeakSet[v14] = v14;
}
class C15 extends WeakSet {
}
