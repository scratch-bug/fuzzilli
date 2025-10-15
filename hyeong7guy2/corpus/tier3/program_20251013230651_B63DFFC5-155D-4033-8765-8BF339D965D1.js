function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a3.toLocaleString(a4, a4, a3, a5, this);
}
new F1(-5.859631975323989);
