function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    let v4 = [Symbol];
    for (let i6 = 0; i6 < 30000; i6++) {
        v4[0];
        v4[8] = 2;
        v4 = [];
    }
}
new F0(F0);
