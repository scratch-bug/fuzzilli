function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = ("object").constructor;
    const v6 = new v5(F2, v5);
    v6[829] = undefined;
    v6[829];
}
new F2();
