function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = (1000.0).constructor;
    t2(-9223372036854775807n);
}
new F2(F2, F2);
