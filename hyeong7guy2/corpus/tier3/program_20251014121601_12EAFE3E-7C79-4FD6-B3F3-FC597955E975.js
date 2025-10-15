function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 {
}
for (let v6 = 0; v6 < 10; v6++) {
    const v7 = new F0(v6, v6, v6);
    v7.__proto__ = C5;
    for (let v8 = 0; v8 < 25; v8++) {
        v7["p" + v8] = v8;
    }
}
