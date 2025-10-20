function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
for (let v3 = 0; v3 < 1000; v3++) {
    let constructor = v3;
    for (let v5 = 0; v5 < 5; v5++) {
        constructor = constructor ^ v5;
    }
}
