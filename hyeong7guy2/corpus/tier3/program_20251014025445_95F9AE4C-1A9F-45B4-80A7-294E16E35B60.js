function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i4 = 0; i4 < 10000; i4++) {
    const v10 = {};
    F0[9] >>= 393;
    Reflect.set(v10);
}
