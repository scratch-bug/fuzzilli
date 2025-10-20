function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Array {
        7 = 268435456;
    }
    const v7 = new C6();
    for (let i9 = 0; i9 < 20000;) {
        const t7 = Array(0);
        t7[0] = 9007199254740991;
        i9++;
    }
    v7.push(268435456);
}
new F0();
