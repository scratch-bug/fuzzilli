for (let v1 = 0; v1 < 50; v1++) {
    const v3 = "p" + v1;
    WeakSet[v3] = v3;
}
class C4 extends WeakSet {
}
C4.p39;
