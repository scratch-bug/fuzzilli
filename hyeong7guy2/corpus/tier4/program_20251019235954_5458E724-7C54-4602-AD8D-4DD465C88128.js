function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Object.seal(Array(a2));
    v7.indexOf(a2, v7);
}
new F0();
