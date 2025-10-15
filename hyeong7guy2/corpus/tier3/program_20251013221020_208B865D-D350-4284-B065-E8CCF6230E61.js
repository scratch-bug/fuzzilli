function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new Date(1e-15, F1, Date, Date, Date, F1, 1e-15);
