class C1 extends WeakMap {
}
for (let i4 = 0; i4 < 25000; ++i4) {
    let indexOf = 1068566450;
    for (let v11 = 0; v11 < 5; v11++) {
        new Proxy(C1, {});
        indexOf = indexOf + 1497827324;
    }
}
