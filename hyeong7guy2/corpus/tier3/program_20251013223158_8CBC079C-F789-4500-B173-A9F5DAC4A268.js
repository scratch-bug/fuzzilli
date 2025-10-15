function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.arguments;
}
new F1(F1, 536870912);
