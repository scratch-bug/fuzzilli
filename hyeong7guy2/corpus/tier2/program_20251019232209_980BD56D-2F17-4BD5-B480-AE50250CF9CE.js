function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v8 = new t2();
    v8.toLocaleString(a4);
}
F2[1] = "NFD";
F2[0] = "nv";
new F2(F2);
