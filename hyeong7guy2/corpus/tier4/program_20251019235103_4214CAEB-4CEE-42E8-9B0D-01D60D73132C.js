function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Float64Array(5);
    v6[1] = v6;
    v6.toSorted();
}
new F1(5, F1);
