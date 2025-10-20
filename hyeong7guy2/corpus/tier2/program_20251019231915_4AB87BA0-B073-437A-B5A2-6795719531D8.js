const v1 = ~-3.0;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Temporal.PlainTime;
    v7.second = v1;
    const v8 = new v7();
    v8.equals(v7);
}
new F2();
